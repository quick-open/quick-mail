/* Quick Mail — no automatic network contact (Quick OS 1.0.3, owner 2026-11-16).
 *
 * Installed to <appdir>/defaults/pref/ by packaging/build-deb.sh. The 1.0.3
 * no-egress audit found these upstream Mozilla background calls still on in
 * 1.0.2 (telemetry, crash reporter, updater, experiments and sync are already
 * compiled out). Account setup (ISPDB autoconfig) and add-on installs stay
 * available: they run only when the user starts them.
 */

/* Remote Settings: no daily poll to thunderbird-settings.thunderbird.net.
 * Owner decision: revocation / add-on blocklist data then refreshes with each
 * Quick Mail release instead. ".invalid" never resolves (RFC 2606). */
pref("services.settings.server", "https://remote-settings.invalid/v1");
pref("services.settings.poll_interval", 31536000);

/* Connectivity / captive-portal checks (detectportal.firefox.com). */
pref("network.connectivity-service.enabled", false);
pref("network.captive-portal-service.enabled", false);
pref("captivedetect.canonicalURL", "");

/* OpenH264 / Widevine plugin checks (aus5.mozilla.org). */
pref("media.gmp-provider.enabled", false);
pref("media.gmp-gmpopenh264.enabled", false);
pref("media.gmp-manager.url", "data:text/plain,");

/* Region lookup, health report, add-on recommendation cache. */
pref("browser.region.update.enabled", false);
pref("browser.region.network.url", "");
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("extensions.getAddons.cache.enabled", false);

/* ISPDB autoconfig: do not send the full e-mail address to the ISP's server. */
pref("mailnews.auto_config.fetchFromISP.sendEmailAddress", false);
