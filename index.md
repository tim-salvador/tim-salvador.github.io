---
layout: default
title: Home
---

<section class="resume-section p-3 p-lg-5 d-flex flex-column fade-in" id="about">
  <div class="my-auto section-wrap anchor">
    <div class="resume-item d-flex flex-column flex-md-row">
      <div class="mr-auto">
        <h1 class="mb-0">Tim <span class="text-primary">Salvador</span></h1>
        <div class="subheading-about mb-2">Chicago, IL ·
          <a href="mailto:{{ site.email }}" title="Email Tim">{{ site.email }}</a>
        </div>
        <div class="hero" role="region" aria-label="Intro">
          <p class="mb-2">Security leader focused on Security Operations, Incident Response, Threat Intelligence, and all things technical. I build pragmatic detection, response playbooks, and cloud security that scale.
          <div class="mt-2">
            <a href="#experience" class="btn btn-primary me-2" title="See selected impact">See impactful value</a>
          </div>
        </div>
      </div>
    </div>

    <hr class="section-divider">
    <h3 class="mb-2">Current Focus & Projects</h3>
    <ul>
      <li>
        <strong>🎯 Advanced Threat Hunting</strong><br>
        <em>Red/Blue/Green CTF Exercises</em><br>
        Competing in invite-only challenges to sharpen detection engineering and adversary emulation tradecraft.
      </li>
      <li>
        <strong>🔒 Secure IoT Architecture</strong><br>
        <em>Home Assistant + Network Segmentation</em><br>
        Applying 15+ years of enterprise segmentation to create zero-trust IoT ecosystems at home—skills directly transferable to industrial/OT environments.
      </li>
      <li>
        <strong>🤖 AI-Driven Detection Lab (Local Stack)</strong><br>
        <em>Open WebUI + Ollama + Whisper</em><br>
        Prototyping autonomous threat analysis workflows—extending SIEM/SOAR playbooks with private, offline AI agents.
      </li>
      <li>
        <strong>📚 Community & Mentorship</strong><br>
        Active in security communities, conferences, webinars, and mentoring—fostering knowledge sharing and professional growth.
      </li>
    </ul>
    <hr class="section-divider">
    <h3 class="mb-2">Leadership Impact</h3>
    <ul>
      <li>
        <strong>Scaled SOC operations from scratch to 50+ alerts/day</strong>—achieved 80%+ noise reduction through custom detection rules and SIEM automation.
      </li>
      <li>
        <strong>Directed incident response for ransomware, credential theft, and DDoS attacks</strong>—contained threats in under 4 hours with zero data exfiltration.
      </li>
      <li>
        <strong>Mentored analysts across career stages</strong>—guided progression to senior roles and management, with a track record of upward mobility.
      </li>
    </ul>

    <hr class="section-divider">
    <h3 class="mb-2">Certifications</h3>
    <div class="certifications-left-aligned">
      {% for cert in site.data.education.certifications %}
      <a href="{{ cert.credential_url }}" 
         target="_blank" rel="noopener" 
         title="Verify {{ cert.name }}" aria-label="Verify {{ cert.name }}" 
         class="cert-badge-link">
        <img src="{{ cert.badge | prepend: '/assets/img/' | relative_url }}" 
             alt="{{ cert.name }}" 
             class="cert-badge" loading="lazy">
      </a>
      {% endfor %}
    </div>
  </div>
</section>

<hr class="section-divider">
<section class="resume-section p-3 p-lg-5 d-flex flex-column fade-in" id="core">
  <div class="my-auto section-wrap anchor">
    <h2 class="mb-2"><i class="fas fa-shield-alt me-2"></i> Core Competencies</h2>
    <hr class="section-divider">
    <div class="row g-3">
      {% for competency in site.data.core_competencies.competencies %}
      <div class="col-md-6">
        <h4>{{ competency.area }}</h4>
        <ul class="tool-grid">
          {% for item in competency.items %}
          <li><span class="badge badge-pill">{{ item }}</span></li>
          {% endfor %}
        </ul>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<hr class="section-divider">
<section class="resume-section p-3 p-lg-5 d-flex flex-column fade-in" id="skills">
  <div class="my-auto section-wrap anchor">
    <h2 class="mb-2"><i class="fas fa-tools me-2"></i> Skills</h2>
    <hr class="section-divider">
    {% for skill_group in site.data.skills %}
    <div class="mb-4">
      <h4>{{ skill_group.category }}</h4>
      <ul class="tool-grid">
        {% for item in skill_group.items %}
        <li><span class="badge badge-pill">{{ item }}</span></li>
        {% endfor %}
      </ul>
    </div>
    {% endfor %}
  </div>
</section>

<hr class="section-divider">
<section class="resume-section p-3 p-lg-5 d-flex flex-column fade-in" id="experience">
  <div class="my-auto section-wrap anchor">
    <h2 class="mb-2"><i class="fas fa-briefcase me-2"></i> Experience</h2>
    <hr class="section-divider">
    <div class="timeline-container">
      {% for experience in site.data.experience.experiences %}
      <details class="exp timeline-{% cycle 'left', 'right' %}">
        <summary>
          <div class="subheading">
            <div>
              <h3 class="exp-title">{{ experience.position }}</h3>
              <div class="exp-meta">{{ experience.company }} | {{ experience.location }}</div>
            </div>
            <div class="exp-date">{{ experience.start_date }}–{{ experience.end_date }}</div>
          </div>
        </summary>
        <div class="mt-2">
          <p>{{ experience.description }}</p>
          
          {% if experience.accomplishments %}
          <h4>Achievements</h4>
          <ul>
            {% for accomplishment in experience.accomplishments %}
            <li>{{ accomplishment }}</li>
            {% endfor %}
          </ul>
          {% endif %}
          
          {% if experience.tools %}
          <h4>Tools</h4>
          <ul>
            {% for tool in experience.tools %}
            <li>{{ tool }}</li>
            {% endfor %}
          </ul>
          {% endif %}
          
          {% if experience.standards %}
          <h4>Standards</h4>
          <ul>
            {% for standard in experience.standards %}
            <li>{{ standard }}</li>
            {% endfor %}
          </ul>
          {% endif %}
        </div>
      </details>
      {% endfor %}
    </div>
  </div>
</section>

<hr class="section-divider">
<section class="resume-section p-3 p-lg-5 d-flex flex-column fade-in" id="education">
  <div class="my-auto section-wrap anchor">
    <h2 class="mb-2"><i class="fas fa-graduation-cap me-2"></i> Education & Certifications</h2>
    <hr class="section-divider">
    
    <h3 class="mb-3">Education</h3>
    {% for edu in site.data.education.education %}
    <div class="resume-item mb-4">
      <h4>{{ edu.degree }} in {{ edu.field }}</h4>
      <div class="exp-meta">{{ edu.school }} · {{ edu.year }}</div>
      <p>{{ edu.description }}</p>
    </div>
    {% endfor %}
    
    <h3 class="mb-3 mt-5">Professional Certifications</h3>
    {% for cert in site.data.education.certifications %}
    <div class="resume-item mb-4">
      <h4>{{ cert.name }}</h4>
      <div class="exp-meta">{{ cert.issuer }} · {{ cert.year }}</div>
      <p>{{ cert.description }}</p>
      <p><a href="{{ cert.credential_url }}" target="_blank" rel="noopener" class="btn btn-sm btn-primary">Verify Credential</a></p>
    </div>
    {% endfor %}
  </div>
</section>

<hr class="section-divider">
<section class="resume-section p-3 p-lg-5 d-flex flex-column fade-in" id="blog">
  <div class="my-auto section-wrap anchor">
    <h2 class="mb-2"><i class="fas fa-blog me-2"></i> Blog</h2>
    <hr class="section-divider">
    <p class="text-muted">Blog posts coming soon. Check back for insights on security operations, incident response, and threat intelligence.</p>
  </div>
</section>
