/**
 *  Copyright (c) taskylizard. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// @unocss-include

export const icon = "FMP_LOGO_WHITE.png"

export const meta = {
  name: 'Free Music Prod',
  description: 'A collection of free music production tools',
  hostname: 'https://free-music-prod.pages.dev',
  keywords: ['music', 'production', 'samples', 'presets', 'plugins']
}

export const commitRef =
  process.env.CF_PAGES && process.env.CF_PAGES_COMMIT_SHA
    ? `<a href="https://github.com/fmhy/FMHYEdit/commit/${
        process.env.CF_PAGES_COMMIT_SHA
      }">${process.env.CF_PAGES_COMMIT_SHA.slice(0, 8)}</a>`
    : 'dev'

export const feedback = "Made with ❤"

export const socialLinks = [
  { icon: 'github', link: 'https://github.com/MarcVida/free-music-prod' }
]

export const sidebar = [
    { text: "Sample Packs", link: "/sample-packs" },
    { text: "Presets", link: "/presets" },
    { text: "Plugins", link: "/plugins" }
]