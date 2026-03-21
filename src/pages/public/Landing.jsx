import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">
            <Navbar />
            <main className="hero-section">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-pulse"></span>
                        Plateforme Freelance 2026
                    </div>
                    <h1>
                        Trouvez les <span className="text-gradient">meilleurs freelancers</span> pour vos projets
                    </h1>
                    <p>
                        Connectez-vous avec des professionnels de haut niveau, négociez en toute sécurité et finalisez vos projets plus rapidement grâce à notre système de paiement garanti.
                    </p>
                    <div className="hero-actions">
                        <Link to="/register" className="btn btn-primary btn-lg">Démarrer votre projet</Link>
                        <a href="#how-it-works" className="btn btn-outline btn-lg" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>Comment ça marche</a>
                    </div>

                    <div className="hero-stats-new" style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)' }}>
                                <span className="material-symbols-rounded text-green" style={{ fontSize: '1.2rem' }}>bolt</span> Livraison rapide
                            </div>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gray)', opacity: 0.5 }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)' }}>
                                <span className="material-symbols-rounded text-primary" style={{ fontSize: '1.2rem' }}>shield_locked</span> Paiements sécurisés
                            </div>
                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gray)', opacity: 0.5 }}></div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--dark)' }}>
                                <span className="material-symbols-rounded text-amber" style={{ fontSize: '1.2rem' }}>workspace_premium</span> Talents de premier plan
                            </div>
                        </div>

                    </div>
                </div>

                <div className="hero-visual">
                    <div className="visual-circle circle-1"></div>
                    <div className="visual-circle circle-2"></div>

                    <div className="glass-card card-top">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-rounded text-green" style={{ fontSize: '2rem' }}>verified</span>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--dark)' }}>Paiement sécurisé</h4>
                                <span className="text-gray" style={{ fontSize: '0.8rem' }}>Dépôt actif</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card card-bottom">
                        <div className="flex items-center gap-3">
                            <div className="avatar" style={{ width: 40, height: 40, background: 'var(--accent-purple)' }}>MB</div>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--dark)' }}>Nouvelle proposition</h4>
                                <span className="text-gray" style={{ fontSize: '0.8rem' }}>De Mehdi B.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section id="how-it-works" style={{ padding: '6rem 2rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Comment ça marche</h2>
                        <p style={{ color: 'var(--gray)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Notre processus simple assure le succès du début à la fin, avec la sécurité intégrée à chaque étape.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: 'edit_document', title: '1. Publiez un projet', desc: 'Décrivez vos besoins, votre budget et votre délai facilement.' },
                            { icon: 'groups', title: '2. Examinez les propositions', desc: 'Reçevez des offres de freelancers de qualité et négociez.' },
                            { icon: 'lock', title: '3. Paiement sécurisé', desc: 'Financez le projet en toute sécurité via nos dépôts. ' },
                            { icon: 'task_alt', title: '4. Obtenez votre travail', desc: 'Approuvez la livraison finale et libérez les fonds.' }
                        ].map((step, i) => (
                            <div key={i} style={{ padding: '2rem', background: 'var(--light-bg)', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--border)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-symbols-rounded" style={{ fontSize: '2rem' }}>{step.icon}</span>
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--dark)' }}>{step.title}</h3>
                                <p style={{ color: 'var(--gray)', fontSize: '0.95rem' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="features" style={{ padding: '6rem 2rem', background: 'var(--light-bg)' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Conçu pour la confiance</h2>
                        <p style={{ color: 'var(--gray)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                            Tout ce dont vous avez besoin pour gérer vos projets freelance en toute sécurité et efficacité au même endroit.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>

                        <div style={{ padding: '2.5rem', background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-symbols-rounded" style={{ fontSize: '1.8rem' }}>handshake</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--dark)' }}>Négociation intelligente</h3>
                            </div>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
                                Vous avez trouvé le partenaire idéal mais le budget ne correspond pas ? Utilisez notre interface de négociation sécurisée intégrée pour discuter des termes, ajuster les étendues et établir un terrain d'entente avant de vous engager sur tout paiement.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--dark)', fontWeight: 500 }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span className="material-symbols-rounded text-green" style={{ fontSize: '1.4rem' }}>check_circle</span> Proposez des budgets alternatifs</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span className="material-symbols-rounded text-green" style={{ fontSize: '1.4rem' }}>check_circle</span> Communication chiffrée</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span className="material-symbols-rounded text-green" style={{ fontSize: '1.4rem' }}>check_circle</span> Confirmation des conditions en un clic</li>
                            </ul>
                        </div>


                        <div style={{ padding: '2.5rem', background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(19, 19, 236, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span className="material-symbols-rounded" style={{ fontSize: '1.8rem' }}>shield_locked</span>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--dark)' }}>Portefeuille d'escrow</h3>
                            </div>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
                                Vos fonds sont toujours protégés. Les clients déposent une première étape pour démarrer le projet, et le reste est sécurisé dans notre système d'escrow jusqu'à ce que la livraison finale soit examinée et approuvée.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--dark)', fontWeight: 500 }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span className="material-symbols-rounded text-primary" style={{ fontSize: '1.4rem' }}>check_circle</span> Paiements de freelance garantis</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span className="material-symbols-rounded text-primary" style={{ fontSize: '1.4rem' }}>check_circle</span> Libérations par étape</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span className="material-symbols-rounded text-primary" style={{ fontSize: '1.4rem' }}>check_circle</span> Résolution de différends intégrée</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Landing;
