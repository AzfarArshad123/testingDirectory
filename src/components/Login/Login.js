/*
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */
import React, { useEffect, useRef } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import OktaSignIn from '@okta/okta-signin-widget';
//import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import Logo from 'images/logos/AssetTrackerLogo.webp'

import oidc from 'config';

const Login = () => {
  const { oktaAuth } = useOktaAuth();
  const widgetRef = useRef();

  useEffect(() => {
    if (!widgetRef.current) {
      return false;
    }

    const { issuer, clientId, redirectUri, scopes, pkce } = oidc;
    const widget = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an OIDC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: issuer.split('/oauth2')[0],
      clientId,
      redirectUri,
      logo: Logo,
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to AoU',
        },
      },
      authParams: {
        // To avoid redirect do not set "pkce" or "display" here. OKTA-335945
        issuer,
        scopes,
        pkce,
      },
      useInteractionCodeFlow: false, // Set to true, if your org is OIE enabled
      features: { registration: true },
    });

    widget.renderEl(
      { el: widgetRef.current },
      (res) => {
        if (res.status === 'SUCCESS') {
          oktaAuth.handleLoginRedirect(res.tokens);
          // oktaAuth.session.setCookieAndRedirect('https://cr.allofuscomms.org')
          // Remove "clientId" from "OktaSignIn" options
          // in order for this to work
          // res.session.setCookieAndRedirect('http://localhost:3000');
        return;          
        } else {
        // The user can be in another authentication state that requires further action.
        // For more information about these states, see:
        //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
        }
      },
      (err) => {
        throw err;
      },
    );

    return () => widget.remove();
  }, [oktaAuth]);

  return (
    <div>
      <div ref={widgetRef} />
    </div>
  );
};

export default Login;
