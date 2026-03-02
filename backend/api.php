<?php
// backend/api.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "config.php";

$action = $_GET["action"] ?? "all";
$method = $_SERVER['REQUEST_METHOD'];

// Helper to handle file uploads
function handleUpload($file) {
    if (!$file || $file['error'] !== UPLOAD_ERR_OK) return "";
    $target_dir = "uploads/";
    if (!is_dir($target_dir)) mkdir($target_dir, 0777, true);
    $filename = time() . "_" . str_replace(' ', '_', basename($file["name"]));
    $target_file = $target_dir . $filename;
    if (move_uploaded_file($file["tmp_name"], $target_file)) {
        return "backend/uploads/" . $filename;
    }
    return "";
}

// 1. Auth Endpoint
if ($action === "login" && $method === "POST") {
    $raw = file_get_contents("php://input");
    $data = json_decode($raw, true);
    $user = trim($data['username'] ?? $_POST['username'] ?? $_REQUEST['username'] ?? '');
    $pass = trim($data['password'] ?? $_POST['password'] ?? $_REQUEST['password'] ?? '');
    
    if ($user === "admin" && $pass === "admin123") {
        echo json_encode(["status" => "success", "token" => bin2hex(random_bytes(16))]);
    } else {
        http_response_code(401);
        echo json_encode(["status" => "error", "message" => "Access Denied. Identity mismatch."]);
    }
    exit();
}

// 2. Message Saving Endpoint
if ($action === "send_message" && $method === "POST") {
    $raw = file_get_contents("php://input");
    $data = json_decode($raw, true);
    if (!$data) $data = $_POST;
    $name = $data['name'] ?? '';
    $email = $data['email'] ?? '';
    $subject = $data['subject'] ?? '';
    $message = $data['message'] ?? '';
    if ($name && $email && $message) {
        $stmt = $conn->prepare("INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $name, $email, $subject, $message);
        if ($stmt->execute()) echo json_encode(["status" => "success"]);
        else echo json_encode(["status" => "error", "message" => $conn->error]);
    }
    exit();
}

// 3. Generic Delete Handler (Using POST for better reliability)
if ($action === "delete" && $method === "POST") {
    $table = $_POST['table'] ?? $_GET['table'] ?? '';
    $id = $_POST['id'] ?? $_GET['id'] ?? '';
    
    $allowed = ["skills", "experience", "education", "projects", "certificates", "messages"];
    if (in_array($table, $allowed) && $id) {
        $stmt = $conn->prepare("DELETE FROM `$table` WHERE id = ?");
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            echo json_encode(["status" => "success", "message" => "Record deleted."]);
        } else {
            echo json_encode(["status" => "error", "message" => $conn->error]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid table or missing ID for deletion."]);
    }
    exit();
}

// 4. Generic Addition & Update (POST)
if ($method === "POST" && $action !== "delete") {
    $table = $_POST['table'] ?? '';
    $id = $_POST['id'] ?? $_REQUEST['id'] ?? null;
    $image_path = handleUpload($_FILES['image'] ?? null);

    if ($table === "skills") {
        if ($id) {
            $sql = "UPDATE skills SET category=?, name=?" . ($image_path ? ", logo_path=?" : "") . " WHERE id=?";
            $stmt = $conn->prepare($sql);
            if ($image_path) $stmt->bind_param("sssi", $_POST['category'], $_POST['name'], $image_path, $id);
            else $stmt->bind_param("ssi", $_POST['category'], $_POST['name'], $id);
        } else {
            $stmt = $conn->prepare("INSERT INTO skills (category, name, logo_path) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $_POST['category'], $_POST['name'], $image_path);
        }
    } elseif ($table === "experience") {
        if ($id) {
            $sql = "UPDATE experience SET company=?, role=?, duration=?, description=?, skills=?" . ($image_path ? ", logo_path=?" : "") . " WHERE id=?";
            $stmt = $conn->prepare($sql);
            if ($image_path) $stmt->bind_param("ssssssi", $_POST['company'], $_POST['role'], $_POST['duration'], $_POST['description'], $_POST['skills'], $image_path, $id);
            else $stmt->bind_param("sssssi", $_POST['company'], $_POST['role'], $_POST['duration'], $_POST['description'], $_POST['skills'], $id);
        } else {
            $stmt = $conn->prepare("INSERT INTO experience (company, role, duration, description, logo_path, skills) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss", $_POST['company'], $_POST['role'], $_POST['duration'], $_POST['description'], $image_path, $_POST['skills']);
        }
    } elseif ($table === "education") {
        if ($id) {
            $sql = "UPDATE education SET school=?, degree=?, duration=?, grade=?, description=?" . ($image_path ? ", logo_path=?" : "") . " WHERE id=?";
            $stmt = $conn->prepare($sql);
            if ($image_path) $stmt->bind_param("ssssssi", $_POST['school'], $_POST['degree'], $_POST['duration'], $_POST['grade'], $_POST['description'], $image_path, $id);
            else $stmt->bind_param("sssssi", $_POST['school'], $_POST['degree'], $_POST['duration'], $_POST['grade'], $_POST['description'], $id);
        } else {
            $stmt = $conn->prepare("INSERT INTO education (school, degree, duration, grade, description, logo_path) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss", $_POST['school'], $_POST['degree'], $_POST['duration'], $_POST['grade'], $_POST['description'], $image_path);
        }
    } elseif ($table === "projects") {
        if ($id) {
            $sql = "UPDATE projects SET title=?, description=?, tags=?, github_url=?, live_url=?" . ($image_path ? ", image_path=?" : "") . " WHERE id=?";
            $stmt = $conn->prepare($sql);
            if ($image_path) $stmt->bind_param("ssssssi", $_POST['title'], $_POST['description'], $_POST['tags'], $_POST['github'], $_POST['live'], $image_path, $id);
            else $stmt->bind_param("sssssi", $_POST['title'], $_POST['description'], $_POST['tags'], $_POST['github'], $_POST['live'], $id);
        } else {
            $stmt = $conn->prepare("INSERT INTO projects (title, description, image_path, tags, github_url, live_url) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("ssssss", $_POST['title'], $_POST['description'], $image_path, $_POST['tags'], $_POST['github'], $_POST['live']);
        }
    } elseif ($table === "certificates") {
        if ($id) {
            $sql = "UPDATE certificates SET title=?, description=?, tags=?" . ($image_path ? ", image_path=?" : "") . " WHERE id=?";
            $stmt = $conn->prepare($sql);
            if ($image_path) $stmt->bind_param("ssssi", $_POST['title'], $_POST['description'], $_POST['tags'], $image_path, $id);
            else $stmt->bind_param("sssi", $_POST['title'], $_POST['description'], $_POST['tags'], $id);
        } else {
            $stmt = $conn->prepare("INSERT INTO certificates (title, description, image_path, tags) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("ssss", $_POST['title'], $_POST['description'], $image_path, $_POST['tags']);
        }
    }

    if (isset($stmt) && $stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Data updated/added successfully."]);
    } else if (isset($stmt)) {
        echo json_encode(["status" => "error", "message" => $conn->error]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid table or operation."]);
    }
    exit();
}

// 5. Data Fetching (GET) - NEWEST FIRST (DESC)
if ($method === "GET") {
    $data = [];
    if ($action === "skills") {
        $result = $conn->query("SELECT * FROM skills ORDER BY CASE WHEN category = 'Frontend' THEN 1 WHEN category = 'Backend' THEN 2 WHEN category = 'Languages' THEN 3 ELSE 4 END ASC, id DESC");
        while ($row = $result->fetch_assoc()) $data[] = $row;
    } elseif ($action === "experience") {
        $result = $conn->query("SELECT * FROM experience ORDER BY id DESC");
        while ($row = $result->fetch_assoc()) {
            $row['skills'] = explode(',', ($row['skills'] ?? ''));
            $data[] = $row;
        }
    } elseif ($action === "education") {
        $result = $conn->query("SELECT * FROM education ORDER BY id DESC");
        while ($row = $result->fetch_assoc()) $data[] = $row;
    } elseif ($action === "projects") {
        $result = $conn->query("SELECT * FROM projects ORDER BY id DESC");
        while ($row = $result->fetch_assoc()) {
            $row['tags'] = explode(',', ($row['tags'] ?? ''));
            $data[] = $row;
        }
    } elseif ($action === "certificates") {
        $result = $conn->query("SELECT * FROM certificates ORDER BY id DESC");
        while ($row = $result->fetch_assoc()) {
            $row['tags'] = explode(',', ($row['tags'] ?? ''));
            $data[] = $row;
        }
    } elseif ($action === "messages") {
        $result = $conn->query("SELECT * FROM messages ORDER BY id DESC");
        while ($row = $result->fetch_assoc()) $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(["status" => "error", "message" => "Operation not supported."]);
}
