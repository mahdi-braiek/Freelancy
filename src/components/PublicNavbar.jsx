import React from 'react';
import { Link } from 'react-router-dom';

const PublicNavbar = () => {
    return (
        <nav className="top-navbar" style={{ position: 'relative' }}>
            <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
                <div className="h-10 w-10 text-white font-bold" style={{ borderRadius: '1rem', background: 'linear-gradient(to bottom right, #162f6b, #1f3f8a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                    Fy
                </div>
                Freelancy
            </Link>
            <div className="navbar-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to="/" className="text-dark font-medium" style={{ textDecoration: 'none', color: '#0d0d1b' }}>Accueil</Link>
                <a href="#how-it-works" className="text-dark font-medium" style={{ textDecoration: 'none', color: '#0d0d1b' }}>Comment ça marche</a>
                <a href="#features" className="text-dark font-medium" style={{ textDecoration: 'none', color: '#0d0d1b' }}>Caractéristiques</a>
            </div>
            <div className="navbar-actions" style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/login" className="btn btn-outline">Se connecter</Link>
                <Link to="/register" className="btn btn-primary">S'inscrire</Link>
            </div>
        </nav>
    );
};

export default PublicNavbar;
