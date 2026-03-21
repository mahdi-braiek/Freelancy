import React from 'react';
import { Link } from 'react-router-dom';
import '../public/Login.css'; 
const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-card card">
                <h2 className="auth-title">Rejoindre Freelencely</h2>
                <form className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Nom complet</label>
                        <input type="text" className="form-input" placeholder="Mehdi B." />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-input" placeholder="mehdi.b@gmail.com" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Mot de passe</label>
                        <input type="password" className="form-input" placeholder="Créez un mot de passe" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Rôle</label>
                        <select className="form-select">
                            <option value="client">Je suis un client qui embauche</option>
                            <option value="freelancer">Je suis un freelancer qui cherche du travail</option>
                        </select>
                    </div>
                    <Link to="/client/dashboard" className="btn btn-primary w-100 mt-4" style={{ width: '100%' }}>Créer un compte</Link>
                </form>
                <p className="auth-link">Déjà un compte? <Link to="/login">Se connecter</Link></p>
            </div>
        </div>
    );
};

export default Register;
