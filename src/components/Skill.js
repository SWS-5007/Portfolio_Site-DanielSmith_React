function Skill() {
    return (
        <section className="page-section" id="skills">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    <h3 className="section-subheading text-muted">
                        I enjoy collaborating with developers, businesses and operations.
                        I have improved on and developed new skills throughout the years and ensured I am up-to-date with the current key trends within the industry.
                        To secure a challenging position where I can effectively contribute my skills as Software Professional, I’m constantly work on my skills and expertise improvement.
                    </h3>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        {/* <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span> */}
                        <h4 className="my-3">App Definition and Development</h4>
                        <p className="text-muted">CockroachDB</p>
                        <p className="text-muted">MariaDB</p>
                        <p className="text-muted">MySQL</p>
                        <p className="text-muted">Percona Server for MySQL</p>
                        <p className="text-muted">PostgreSQL</p>
                        <p className="text-muted">Redis</p>
                        <p className="text-muted">Bitnami Stacksmith</p>
                        <p className="text-muted">Helm</p>
                        <p className="text-muted">GitLab</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="my-3">Orchestration & Management</h4>
                        <p className="text-muted">Kubernetes</p>
                        <p className="text-muted">CoreDNS</p>
                        <p className="text-muted">etcd</p>
                        <p className="text-muted">Nginx</p>
                        <p className="text-muted">Traefik</p>
                        <p className="text-muted">HAProxy</p>
                        <p className="text-muted">MetalLB</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="my-3">Observability and Analysis</h4>
                        <p className="text-muted">Prometheus</p>
                        <p className="text-muted">Grafana</p>
                        <p className="text-muted">Thanos</p>
                        <p className="text-muted">Elastic (Filebeat, Elasticseaerch & Kibana)</p>
                        <p className="text-muted">Grafana Loki</p>
                        <p className="text-muted">FluentD</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="my-3">Provisioning</h4>
                        <p className="text-muted">Terraform</p>
                        <p className="text-muted">AWX–Non-CNCF</p>
                        <p className="text-muted">Ansible</p>
                        <p className="text-muted">Harbor</p>
                        <p className="text-muted">GitLab Container Registry – Non-CNCF</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="my-3">Platform</h4>
                        <p className="text-muted">Docker</p>
                        <p className="text-muted">K3s</p>
                        <p className="text-muted">Microsoft Azure Public Cloud – AKS/Private</p>
                        <p className="text-muted">AKS</p>
                        <p className="text-muted">Microsoft Azure Public Cloud – Kubespray</p>
                        <p className="text-muted">HA K8S</p>
                        <p className="text-muted">Nutanix Private Cloud – Kubespray HA K8S</p>
                        <p className="text-muted">Kubespray</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="my-3">Runtime</h4>
                        <p className="text-muted">ROOK</p>
                        <p className="text-muted">NFS client provisioner – Non-CNCF</p>
                        <p className="text-muted">containerd</p>
                        <p className="text-muted">Container Network Interface (CNI)</p>
                        <p className="text-muted">Flannel</p>
                        <p className="text-muted">Project Calico</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-code fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Code</h4>
                        <p className="text-muted">HTML5</p>
                        <p className="text-muted">CSS3(Less,Sass)</p>
                        <p className="text-muted">Javascript(jQuery,AJAX,Vue.js)</p>
                        <p className="text-muted">PHP</p>
                        <p className="text-muted">Python</p>
                        <p className="text-muted">MySQL</p>
                        <p className="text-muted">PostgreSQL</p>
                        <p className="text-muted">CockroachDB</p>
                        <p className="text-muted">Java,.Net,C,Groovy (Academy)</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-cubes fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Framework</h4>
                        <p className="text-muted">Laravel Framework</p>
                        <p className="text-muted">Flask (NEW)</p>
                        <p className="text-muted">Yii Framework</p>
                        <p className="text-muted">Foundation 6</p>
                        <p className="text-muted">Twitter Bootstrap 2,3,4</p>
                        <p className="text-muted">T3 Theme Framework</p>
                        <p className="text-muted">JointsWP Theme Framework</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-search fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">SEO & Data Analysis</h4>
                        <p className="text-muted">UML</p>
                        <p className="text-muted">SEO</p>
                        <p className="text-muted">Jira Agile</p>
                        <p className="text-muted">Google Analytics</p>
                        <p className="text-muted">Google Search Console</p>
                        <p className="text-muted">Google Keyword Planner</p>
                        <p className="text-muted">Plotalot – Joomla! Extension</p>
                        <p className="text-muted">SSADM</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-window-maximize fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Web-Based Platform</h4>
                        <p className="text-muted">WordPress</p>
                        <p className="text-muted">Joomla</p>
                        <p className="text-muted">JIRA</p>
                        <p className="text-muted">SugarCRM/SuiteCRM</p>
                        <p className="text-muted">JasperReport</p>
                        <p className="text-muted">LimeSurvey</p>
                        <p className="text-muted">Vesta Control Panel</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-house fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">OS</h4>
                        <p className="text-muted">Windows</p>
                        <p className="text-muted">Mac OS X</p>
                        <p className="text-muted">Linux</p>
                        <p className="text-muted">Ubuntu Server</p>
                        <p className="text-muted">CentOS 7</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-tools fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Tools</h4>
                        <p className="text-muted">Version Control (GIT, SVN)</p>
                        <p className="text-muted">Visual Studio Code</p>
                        <p className="text-muted">Vagrant</p>
                        <p className="text-muted">DBeaver</p>
                        <p className="text-muted">Postman</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
  
export default Skill;
