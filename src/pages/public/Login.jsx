import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-card card">
                <h2 className="auth-title">Bienvenue</h2>
                <form className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" placeholder="Entrez votre email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Mot de passe</label>
                        <input type="password" className="form-input" placeholder="Entrez votre mot de passe" />
                    </div>
                    <Link to="/client/dashboard" className="btn btn-primary w-100 mt-4" style={{ width: '100%' }}>Se connecter</Link>
                </form>
                <p className="auth-link">Vous n'avez pas de compte? <Link to="/register">S'inscrire</Link></p>
            </div>
        </div>
    );
};

export default Login;
