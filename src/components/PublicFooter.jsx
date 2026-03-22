import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const PublicFooter = () => {
    return (
        <footer style={{ backgroundColor: 'var(--dark)', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
                            <span className="material-symbols-rounded text-primary">diamond</span>
                            Freelencely
                        </div>
                        <p style={{ color: '#9ca3af', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                            Autonomiser l'avenir du travail. Connectez-vous avec les meilleurs talents mondialement et gérez vos projets freelance en sécurité.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}><Twitter size={20} /></a>
                            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}><Linkedin size={20} /></a>
                            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}><Github size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Pour les clients</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/register" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Publier un projet</Link></li>
                            <li><Link to="/register" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Trouver des freelancers</Link></li>
                            <li><Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Solutions Entreprise</Link></li>
                            <li><Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Confiance et Sécurité</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Pour les freelancers</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/register" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Trouver du travail</Link></li>
                            <li><Link to="/register" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Créer un profil</Link></li>
                            <li><Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Avantages Premium</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.125rem', marginBottom: '1.5rem', fontWeight: 600 }}>Nous contacter</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
                                <Mail size={16} /> support@freelencely.com
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', color: '#9ca3af', fontSize: '0.875rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Freelencely. Tous droits réservés.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Politique de confidentialité</Link>
                        <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>Conditions d'utilisation</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PublicFooter;
