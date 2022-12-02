import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { API_URL } from "../../api/endpoints";
import { useOktaAuth } from "@okta/okta-react";

const LoginLanding = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const cb =
    "background-container-" + Math.round(Math.random() * 4) + " profile";
  useEffect(() => {
    if (
      localStorage.getItem("user_id") === null &&
      localStorage.getItem("okta-token-storage")
    ) {
      const { idToken } = JSON.parse(
        localStorage.getItem("okta-token-storage")
      );
      fetch(`${API_URL}/api/rest-endpoint/get/user/${idToken?.claims?.email}`)
        .then((res) => res.json())
        .then((id) => {
          localStorage.setItem("user_id", id);
        })
        .catch((error) => new Error(error));
    }
  }, [authState, oktaAuth]);

  if (!authState) {
    return <div>Loading....</div>;
  }

  if (authState && !authState.isAuthenticated && !authState.isPending) {
    // eslint-disable-next-line
    const login = async () => {
      await oktaAuth.signInWithRedirect();
    };

    const finalRender = (
      <>
        <div
          style={{
            width: "100%",
            left: 0,
            height: 1000,
            marginTop: 0,
            background:
              "linear-gradient(43deg, #65b8f7 9%, #6b72ce 65%, #176d9a 87%)",
          }}
        >
          <div
            class={cb}
            style={{
              width: "100%",
              left: 0,
              height: 1000,
              marginTop: 0,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div style={{ height: 300 }}>
              <section
                className="user-profile"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 470,
                  padding: 20,
                  paddingTop: "20%",
                }}
              >
                <div className={cb}>
                  <div class="form-container">
                    <div className="form-element logo-element">
                      <p className="logo">&nbsp;</p>
                    </div>
                    <div
                      className="interstitial-text nonmember"
                      style={{
                        marginTop: "-50px",
                        marginLeft: "0%",
                        color: "#000",
                        width: 370,
                        padding: 50,
                        background:
                          "url(/static/media/AssetTrackerLogo.3e59a2808cdcace3531e.webp)",
                        backgroundSize: "70%",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "60px 45px",
                        backgroundColor: "#fff",
                      }}
                    >
                      <p
                        style={{
                          marginTop: 50,
                          width: 150,
                          textAlign: "center",
                        }}
                      ></p>

                      <div
                        style={{
                          marginTop: "40%",
                          border: "0px",
                          textAlign: "center",
                          marginLeft: "auto",
                          marginRight: "auto",
                          height: 40,
                          paddingTop: 10,
                          position: "block",
                          width: 200,
                          background: "#216fb4",
                          fontWeight: 800,
                          color: "#fff",
                        }}
                      >
                        <button
                          style={{
                            background: "transparent",
                            border: "none",
                            fontSize: "1.5rem",
                            width: "100%",
                            color: "white !important",
                            cursor: "pointer",
                          }}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/home";
                          }}
                        >
                          Log in
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );

    const tbr = <>{finalRender}</>;

    return tbr;
  } else {
    return <Navigate to="/home" />;
  }
};

export default LoginLanding;
