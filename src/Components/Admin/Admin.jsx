import React, { useState, useEffect } from "react";
import { FiLayout, FiBriefcase, FiAward, FiMessageSquare, FiLogOut, FiPlus, FiTrash2, FiMenu, FiX, FiCpu, FiEdit } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState("skills");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [editingItem, setEditingItem] = useState(null);
    const [credentials, setCredentials] = useState({ username: "admin", password: "admin123" });

    useEffect(() => {
        const token = localStorage.getItem("admin_token");
        if (token) setIsLoggedIn(true);
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetchData();
        }
    }, [isLoggedIn, activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1/portfolio/backend/api.php?action=${activeTab}`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Fetch error:", error);
            toast.error("System Fetch Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1/portfolio/backend/api.php?action=login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });
            const result = await response.json();
            if (result.status === "success") {
                localStorage.setItem("admin_token", result.token);
                setIsLoggedIn(true);
                toast.success("Identity Verified. Portal Open.");
            } else {
                toast.error(result.message || "Access Denied.");
            }
        } catch (error) {
            toast.error("Login Error: " + error.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("admin_token");
        setIsLoggedIn(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Permanent deletion protocol started. Proceed?")) return;
        try {
            const formData = new FormData();
            formData.append("table", activeTab);
            formData.append("id", id);

            const response = await fetch(`http://127.0.0.1/portfolio/backend/api.php?action=delete`, {
                method: "POST",
                body: formData
            });
            const text = await response.text();
            let result;
            try { result = JSON.parse(text); } catch (e) { throw new Error("Server Error: " + text); }

            if (result.status === "success") {
                toast.success("Sector Purged. Data Erased.");
                fetchData();
            } else {
                toast.error(result.message || "Deletion sequence failed.");
            }
        } catch (error) {
            console.error("Delete Error:", error);
            toast.error("Delete Failure: " + error.message);
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setShowModal(true);
    };

    const tabs = [
        { id: "skills", label: "Skills", icon: <FiCpu /> },
        { id: "experience", label: "Experience", icon: <FiBriefcase /> },
        { id: "education", label: "Education", icon: <FaGraduationCap /> },
        { id: "projects", label: "Projects", icon: <FiLayout /> },
        { id: "certificates", label: "Certificates", icon: <FiAward /> },
        { id: "messages", label: "Messages", icon: <FiMessageSquare /> },
    ];

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-[#050410] flex items-center justify-center p-6 relative overflow-hidden">
                <ToastContainer theme="dark" />
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                </div>
                <form onSubmit={handleLogin} className="relative z-10 bg-[#0b0a1d] p-10 md:p-14 rounded-[3rem] border border-white/5 shadow-2xl w-full max-w-md">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">Admin <span className="text-purple-500">Vault</span></h1>
                        <p className="text-gray-500 mt-4 text-[10px] font-bold uppercase tracking-[0.3em]">Secure Access Only</p>
                    </div>
                    <div className="space-y-6">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full bg-[#16142e] border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-purple-500 transition-all font-medium"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-[#16142e] border border-white/5 rounded-2xl p-5 text-white focus:outline-none focus:border-purple-500 transition-all font-medium"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        />
                        <button type="submit" className="w-full bg-purple-600 py-5 rounded-2xl font-bold uppercase tracking-widest text-white shadow-lg shadow-purple-900/40 hover:scale-[1.02] active:scale-95 transition-all">Authorize</button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050410] text-gray-400 font-sans flex flex-col lg:flex-row overflow-hidden">
            <ToastContainer theme="dark" />

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 w-full bg-[#0b0a1d] border-b border-white/5 p-6 flex justify-between items-center z-[100]">
                <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">Manager</h2>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl">
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`w-full lg:w-72 fixed h-full bg-[#0b0a1d] border-r border-white/5 p-8 flex flex-col z-[90] transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
                <div className="hidden lg:flex items-center gap-4 mb-14 px-2 italic">
                    <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg"><FiLayout className="text-white" /></div>
                    <h2 className="text-xl font-black text-white tracking-widest uppercase">Admin</h2>
                </div>

                <nav className="flex-grow space-y-2 pt-20 lg:pt-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id); setIsMobileMenuOpen(false); }}
                            className={`w-full p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? "bg-purple-600 text-white shadow-xl shadow-purple-900/40" : "hover:bg-white/5 text-gray-500"}`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </nav>

                <div className="pt-8 border-t border-white/5 mt-auto">
                    <button onClick={handleLogout} className="flex items-center gap-4 w-full p-4 bg-red-500/10 text-red-500 font-bold uppercase text-[10px] tracking-widest hover:bg-red-500/20 rounded-2xl transition-all">
                        <FiLogOut /> Logout Session
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-72 p-6 lg:p-14 min-h-screen overflow-y-auto mt-24 lg:mt-0">
                <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 border-b border-white/5 pb-10 gap-6 relative z-10">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-black text-white italic tracking-tighter uppercase leading-none">{activeTab}</h1>
                        <p className="text-gray-500 mt-4 text-xs font-bold tracking-widest uppercase">Control Station / {activeTab}</p>
                    </div>
                    {activeTab !== "messages" && (
                        <button
                            onClick={() => { setEditingItem(null); setShowModal(true); }}
                            className="bg-purple-600 px-10 py-5 rounded-[2rem] font-bold text-[10px] uppercase tracking-[0.3em] text-white shadow-2xl shadow-purple-900/30 hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
                        >
                            <FiPlus className="inline mr-2" /> New Entity
                        </button>
                    )}
                </div>

                {/* List View */}
                <div className="space-y-6 relative z-10">
                    {loading ? (
                        <div className="p-20 text-center animate-pulse"><p className="text-purple-500 font-bold tracking-widest uppercase italic">Loading Sector...</p></div>
                    ) : data.length === 0 ? (
                        <div className="p-20 bg-[#0b0a1d]/50 rounded-[3rem] border border-dashed border-white/5 text-center"><p className="text-gray-600 italic">No data detected in this sector.</p></div>
                    ) : (
                        data.map((item) => (
                            <div key={item.id} className="bg-[#110e2c]/60 backdrop-blur-md rounded-[2.5rem] border border-white/5 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-purple-600/30 transition-all">
                                <div className="flex items-center gap-6">
                                    {(item.logo_path || item.image_path) && (
                                        <div className="w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center p-2 border border-white/5 overflow-hidden">
                                            <img src={`http://localhost/portfolio/${item.logo_path || item.image_path}`} className="max-w-full max-h-full object-contain" onError={(e) => e.target.src = "https://via.placeholder.com/100"} />
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-xl font-bold text-white tracking-tight">{item.name || item.role || item.degree || item.title || "Untitled"}</h4>
                                        <p className="text-purple-500 font-bold uppercase text-[9px] tracking-[0.3em] mt-1">
                                            {activeTab === "messages" ? `Subject: ${item.subject}` : (item.category || item.company || item.school || item.tags)}
                                        </p>
                                        {item.email && <p className="text-gray-400 text-xs mt-2 font-medium">{item.email}</p>}
                                        {activeTab === "messages" && item.message && (
                                            <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/5 text-gray-400 text-sm italic leading-relaxed">
                                                "{item.message}"
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    {activeTab !== "messages" && (
                                        <button onClick={() => handleEdit(item)} className="p-4 bg-purple-500/10 text-purple-500 rounded-2xl hover:bg-purple-500 hover:text-white transition-all">
                                            <FiEdit />
                                        </button>
                                    )}
                                    <button onClick={() => handleDelete(item.id)} className="p-4 bg-red-500/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all">
                                        <FiTrash2 />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>

            {/* Entry Modal */}
            {showModal && (
                <Modal
                    type={activeTab}
                    item={editingItem}
                    onClose={() => { setShowModal(false); setEditingItem(null); fetchData(); }}
                />
            )}
        </div>
    );
};

const Modal = ({ type, item, onClose }) => {
    const [formData, setFormData] = useState(item || {});
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (item) setFormData(item);
    }, [item]);

    const configs = {
        skills: [{ l: 'Name', n: 'name', t: 'text' }, { l: 'Category', n: 'category', t: 'select', o: ['Frontend', 'Backend', 'Languages', 'Tools'] }],
        experience: [{ l: 'Company', n: 'company', t: 'text' }, { l: 'Role', n: 'role', t: 'text' }, { l: 'Duration', n: 'duration', t: 'text' }, { l: 'Skills', n: 'skills', t: 'text' }, { l: 'Description', n: 'description', t: 'textarea' }],
        education: [{ l: 'School', n: 'school', t: 'text' }, { l: 'Degree', n: 'degree', t: 'text' }, { l: 'Duration', n: 'duration', t: 'text' }, { l: 'Grade', n: 'grade', t: 'text' }, { l: 'Description', n: 'description', t: 'textarea' }],
        projects: [{ l: 'Title', n: 'title', t: 'text' }, { l: 'Tags', n: 'tags', t: 'text' }, { l: 'Github', n: 'github', t: 'text' }, { l: 'Live', n: 'live', t: 'text' }, { l: 'Description', n: 'description', t: 'textarea' }],
        certificates: [{ l: 'Title', n: 'title', t: 'text' }, { l: 'Tags', n: 'tags', t: 'text' }, { l: 'Description', n: 'description', t: 'textarea' }]
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const data = new FormData();
        data.append("table", type);

        // Prioritize ID from formData (Essential for EDIT to work)
        if (formData.id) data.append("id", formData.id);

        Object.keys(formData).forEach(key => {
            if (key !== 'id' && key !== 'logo_path' && key !== 'image_path') {
                let val = formData[key];
                // Convert array fields back to comma-separated strings for PHP/MySQL
                if (Array.isArray(val)) val = val.join(",");
                data.append(key, val);
            }
        });

        try {
            const response = await fetch("http://127.0.0.1/portfolio/backend/api.php", {
                method: "POST",
                body: data,
            });
            const text = await response.text();
            let result;
            try {
                result = JSON.parse(text);
            } catch (e) {
                throw new Error("Server Response Error: " + text);
            }

            if (result.status === "success") {
                toast.success(item ? "Identity Records Updated." : "New Entity Registered.");
                onClose();
            } else {
                toast.error(result.message || "Operation failed.");
            }
        } catch (error) {
            console.error("Submit Error:", error);
            toast.error("Process Failed: " + error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/95 z-[200] flex items-center justify-center p-6 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="bg-[#0b0a1d] p-10 md:p-14 rounded-[3.5rem] w-full max-w-2xl border border-white/5 max-h-[90vh] overflow-y-auto">
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-10 pb-6 border-b border-white/5">{item ? 'Edit' : 'Register'} {type}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {configs[type]?.map((f, i) => (
                        <div key={i} className={f.t === 'textarea' ? 'md:col-span-2' : ''}>
                            <label className="block text-gray-600 text-[10px] uppercase font-bold mb-3 ml-2 tracking-[0.2em]">{f.l}</label>
                            {f.t === 'select' ? (
                                <select
                                    value={formData[f.n] || ''}
                                    onChange={(e) => setFormData({ ...formData, [f.n]: e.target.value })}
                                    className="w-full bg-[#16142e] border border-white/5 rounded-2xl p-4 text-white focus:border-purple-500 outline-none"
                                >
                                    <option value="">Select Sector</option>
                                    {f.o.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            ) : f.t === 'textarea' ? (
                                <textarea
                                    value={formData[f.n] || ''}
                                    onChange={(e) => setFormData({ ...formData, [f.n]: e.target.value })}
                                    className="w-full bg-[#16142e] border border-white/5 rounded-2xl p-4 text-white focus:border-purple-500 outline-none"
                                    rows="4"
                                />
                            ) : (
                                <input
                                    value={formData[f.n] || ''}
                                    onChange={(e) => setFormData({ ...formData, [f.n]: e.target.value })}
                                    type="text"
                                    className="w-full bg-[#16142e] border border-white/5 rounded-2xl p-4 text-white focus:border-purple-500 outline-none"
                                />
                            )}
                        </div>
                    ))}
                    <div className="md:col-span-2">
                        <label className="block text-gray-600 text-[10px] uppercase font-bold mb-3 ml-2 tracking-[0.2em]">Visual Identification (Image)</label>
                        <input type="file" onChange={handleFileChange} className="w-full bg-[#16142e] border border-dashed border-white/10 p-10 rounded-3xl text-xs text-gray-500" />
                        {item && (item.logo_path || item.image_path) && <p className="text-[9px] text-gray-500 mt-2 ml-2 italic">Keep empty to retain existing visual data.</p>}
                    </div>
                </div>
                <div className="flex gap-4 mt-12">
                    <button type="button" onClick={onClose} className="flex-1 py-5 text-gray-600 font-bold uppercase text-[10px] tracking-widest hover:text-white">Abort</button>
                    <button type="submit" disabled={submitting} className="flex-[2] py-5 bg-purple-600 rounded-[2rem] text-white font-bold uppercase text-[10px] tracking-widest shadow-xl hover:scale-105 transition-all">Establish Protocol</button>
                </div>
            </form>
        </div>
    );
};

export default Admin;
