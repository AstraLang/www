import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="nav">
    <div class="nav-content">
      <a href="#" class="nav-logo">
        <img src="https://raw.githubusercontent.com/neoapps-dev/Astra/refs/heads/main/logo.png" alt="Astra Logo">
        <span>Astra</span>
      </a>
      <div class="nav-links">
        <a href="#" class="nav-button secondary">Documentation</a>
        <a href="#" class="nav-button secondary">Community</a>
        <a href="#" class="nav-button secondary">GitHub</a>
        <a href="#" class="nav-button primary">Download</a>
      </div>
    </div>
  </nav>

  <div class="hero">
    <img src="https://raw.githubusercontent.com/neoapps-dev/Astra/refs/heads/main/logo.png" alt="Astra Logo" class="logo">
    <h1 class="title">Astra</h1>
    <p class="subtitle">The powerful transpiled programming language.</p>

    <div class="code-preview">
      <div class="window-controls">
        <div class="control red"></div>
        <div class="control yellow"></div>
        <div class="control green"></div>
      </div>
      <div class="code-content">
        <pre><code><span class="comment">// A comment</span>
<span class="keyword">lib</span> Test {
   <span class="keyword">class</span> Example {
         <span class="keyword">fn</span> doIt() {
	   println("Did it")
         }
   }
}

<span class="keyword">fn</span> main() -> int {
	Test::Example tester
	tester.doIt()
}</code></pre>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="features">
      <div class="feature-card">
        <h2 class="feature-title">Native C++ Integration</h2>
        <p>Write beautiful, modern code that seamlessly transpiles to C++. Leverage existing ecosystems while embracing the future.</p>
      </div>
      
      <div class="feature-card">
        <h2 class="feature-title">Rust-Powered Engine</h2>
        <p>Built with Rust's legendary reliability and performance, ensuring rock-solid compilation and blazing-fast execution.</p>
      </div>
      
      <div class="feature-card">
        <h2 class="feature-title">Developer Experience</h2>
        <p>Experience the perfect balance of power and simplicity with an intuitive syntax designed for the modern era.</p>
      </div>
    </div>

    <div class="cta">
      <a href="#" class="button">Download Astra</a>
    </div>
  </div>

  <footer class="made-with-love">
    Made with <span class="heart">❤️</span> by the community
  </footer>
`