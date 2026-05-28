/**
 * Nightingale — Gemini API Configuration
 *
 * HOW TO UPDATE THE API KEY:
 *   1. Open this file (nightingalewebsite/gemini-config.js)
 *   2. Replace the value of `apiKey` with the new key
 *   3. Save — changes take effect on next page load
 *
 * You can also update the key at runtime from the
 * "⚙ API Settings" panel on the Department AI Summary page.
 * Runtime changes are saved to sessionStorage and override this file
 * until the browser session ends.
 *
 * TO SET YOUR API KEY:
 *   Option A — File (local only, never commit):
 *     Replace the empty string below with your Gemini API key.
 *   Option B — In-app:
 *     Use ⚙ API Settings on the AI Summary page; saved to sessionStorage.
 *
 * Get a key at: https://aistudio.google.com/app/apikey
 *
 * Supported models (as of 2026):
 *   gemini-2.5-pro          — most capable, recommended
 *   gemini-2.5-flash        — faster, lower latency
 *   gemini-2.0-flash        — previous generation
 */
const GEMINI_CONFIG = {
  apiKey:          "",   // ← Paste your Gemini API key here (do not commit this file with a real key)
  model:           "gemini-2.5-pro",
  endpoint:        "https://generativelanguage.googleapis.com/v1beta/models",
  temperature:     0.3,
  maxOutputTokens: 2048,
  topP:            0.8
};
