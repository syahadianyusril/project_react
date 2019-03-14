import React, { Component } from "react";
import "../assets/css/profil.css";

class ContentProfil extends Component {
  render() {
    return (
      <div class="container-fluid">
        <hr />
        <div class="container">
          <main class="profile">
            <div class="profile-bg" />
            <section class="container">
              <aside class="profile-image">
                <a class="camera" href="#">
                  <i class="fas fa-camera" />
                </a>
              </aside>
              <section class="profile-info">
                <h1 class="first-name" />
                <h1 class="second-name" />
                <h2>My Profile</h2>
                <h2>diisi nama orang</h2>
                <p>
                  hello hello, I'm angela, artist and developer 🌼 student at
                  stanford; intern at niantic / zynga 🌱 happy to be here! 🌿
                  let's code the best we can!
                </p>

                <aside class="social-media-icons">
                  <a href="https://twitter.com/zephybite" target="_blank">
                    <i class="fab fa-twitter" />
                  </a>
                  <a href="https://codepen.io/zephyo" target="_blank">
                    <i class="fab fa-codepen" />
                  </a>
                  <a href="https://github.com/zephyo" target="_blank">
                    <i class="fab fa-github" />
                  </a>
                  <a href="https://medium.com/@zephyo" target="_blank">
                    <i class="fab fa-medium" />
                  </a>
                </aside>
              </section>
            </section>
            <section class="statistics">
              <p>
                <strong />
              </p>
              <p>
                <strong>Email: </strong> diisi email
              </p>
              <p>
                <strong /> Likes
              </p>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
export default ContentProfil;
