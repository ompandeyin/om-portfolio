import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import { PERSONAL } from '../data/constants';

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;

    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${PERSONAL.githubUsername}`),
          fetch(`https://api.github.com/users/${PERSONAL.githubUsername}/repos?sort=updated&per_page=6`),
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();

          setStats({
            publicRepos: userData.public_repos,
            followers: userData.followers,
            following: userData.following,
          });

          setRepos(reposData.filter((r) => !r.fork).slice(0, 4));
        }
      } catch (err) {
        console.warn('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, [inView]);

  return (
    <section id="github" ref={ref}>
      <motion.div
        className="section-container"
        variants={containerVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.p variants={itemVariant} style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.9rem', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Open Source
        </motion.p>
        <motion.h2 variants={itemVariant} className="section-title">
          GitHub <span className="text-gradient">activity</span>
        </motion.h2>

        {loading ? (
          <div className="github-stats-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton" style={{ height: 120 }} />
            ))}
          </div>
        ) : stats ? (
          <>
            <motion.div className="github-stats-grid" variants={containerVariant}>
              <motion.div variants={itemVariant} className="card github-stat-card">
                <div className="github-stat-value text-gradient">{stats.publicRepos}</div>
                <div className="github-stat-label">Public Repositories</div>
              </motion.div>
              <motion.div variants={itemVariant} className="card github-stat-card">
                <div className="github-stat-value text-gradient">{stats.followers}</div>
                <div className="github-stat-label">Followers</div>
              </motion.div>
              <motion.div variants={itemVariant} className="card github-stat-card">
                <div className="github-stat-value text-gradient">{stats.following}</div>
                <div className="github-stat-label">Following</div>
              </motion.div>
            </motion.div>

            {repos.length > 0 && (
              <motion.div className="github-repos-grid" variants={containerVariant}>
                {repos.map((repo) => (
                  <motion.a
                    key={repo.id}
                    variants={itemVariant}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card github-repo-card"
                    style={{ textDecoration: 'none' }}
                    whileHover={{ scale: 1.02, y: -3 }}
                  >
                    <h4>
                      {repo.name} <FiExternalLink style={{ fontSize: '0.8rem' }} />
                    </h4>
                    <p>{repo.description || 'No description provided.'}</p>
                    <div className="github-repo-meta">
                      {repo.language && <span>● {repo.language}</span>}
                      <span><FiStar style={{ verticalAlign: 'middle' }} /> {repo.stargazers_count}</span>
                      <span><FiGitBranch style={{ verticalAlign: 'middle' }} /> {repo.forks_count}</span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </>
        ) : (
          <motion.p variants={itemVariant} style={{ color: 'var(--text-secondary)' }}>
            Unable to load GitHub data. Visit my profile directly at{' '}
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)' }}>
              GitHub
            </a>.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
