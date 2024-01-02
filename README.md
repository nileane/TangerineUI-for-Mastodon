<h1>
 <picture>
  <source media="(prefers-color-scheme: dark)" srcset="./art/Logo_Wide_Dark.png?raw=true">
  <source media="(prefers-color-scheme: light)" srcset="./art/Logo_Wide.png?raw=true">
  <img alt="Tangerine UI for Mastodon" src="./art/Logo_Wide.png?raw=true" height="110">
 </picture>
</h1>

> [!NOTE]
> You are currently on the **legacy branch** for Tangerine UI (v1.9).  
> **This version of Tangerine UI is only meant to be installed on instances running Mastodon 4.1.*x* or 4.2.*x***
> 
> If your Mastodon instance is running the latest version of Mastodon (4.3 and newer), use [the latest release of Tangerine UI](https://github.com/nileane/TangerineUI-for-Mastodon) (v2.*x*) instead.

## Table of contents

* [**Variants**](#variants)
* [**Compatibility**](#compatibility)
* [**Installation**](#installation-for-mastodon-admins)
  * [Install on a **Mastodon** instance](#installation-for-mastodon-admins)
  * [Install on a **Glitch-soc** instance](#installation-for-glitch-soc-admins)
  * [Install as a regular user](#installation-for-regular-users)
* [**Things to know**](#things-to-know)
* [**Accessibility**](#accessibility)
* [**Credits**](#credits)
* [**Support me**](#support-me-3)

## Variants

* **Tangerine 🍊**  
  Default variant for Tangerine UI, featuring a soft orange palette.

![Tangerine UI's orange palette, both in dark and light modes.](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/5048329b-9d95-4b11-a859-48c1f37d54e6)

* **Purple 🪻**  
  For those of you who like Tangerine UI but want to stick to Mastodon's purple palette.

![Tangerine UI's purple variant, both in dark and light modes.](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/c01c7a54-d2db-4fe5-a0f6-dc6e77cfe128)

## Compatibility
⚠️ This is the legacy version of Tangerine UI (v1.9).  
This version of Tangerine UI is only meant to be installed on instances running Mastodon 4.1.*x* or 4.2.*x*

**If your Mastodon instance is running the latest version of Mastodon (4.3 and newer), use [the latest release of Tangerine UI](https://github.com/nileane/TangerineUI-for-Mastodon) (v2.*x*) instead.**

## Installation for Mastodon admins

### Install Tangerine UI as the only theme on your instance:
* Copy & paste the contents of 🍊 [`TangerineUI.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/legacy/TangerineUI.css) to the **Custom CSS** field in the administration panel on your Mastodon instance (Navigate to https://*domain*/admin/settings/appearance).
   * 🪻 For the purple variant, copy the contents of [`TangerineUI-purple.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/legacy/TangerineUI-purple.css) instead.

> [!WARNING]
> **Using the 'Custom CSS' field to apply Tangerine UI will prevent all users on your instance from being able to choose another theme in their Appearance settings** ([see *Accessibility*](#accessibility)).  
> Please make sure there is a consensus among your users for doing so. If not, see below how to install Tangerine UI as an optional theme for your users.

### Install Tangerine UI as an optional theme on your instance [Recommended]:
Follow these instructions if you wish to add Tangerine UI as an available theme for your users on your instance.  
This will also allow you to set Tangerine UI as the default theme for your instance, while still letting your users change back to any of Mastodon's default themes in their Appearance settings.

1. **Copy the files** from `mastodon/app/javascript/styles/` [in this repository](https://github.com/nileane/TangerineUI-for-Mastodon/tree/legacy/mastodon/app/javascript/styles/) to your Mastodon themes directory `app/javascript/styles/`:

```sh
# Where $REPO is this repository, and $INSTALLDIR is your Mastodon installation.
cp -r $REPO/mastodon/app/javascript/styles/* $INSTALLDIR/app/javascript/styles
```


2. **Add Tangerine UI to `themes.yml`**. To make Tangerine UI available in your users's settings, you need to add a new line to [`config/themes.yml`](https://github.com/mastodon/mastodon/blob/legacy/config/themes.yml). Here we're adding 3 new lines, one for Tangerine UI, a 2nd one for the purple variant, and a 3rd one for the Cherry variant:

```yml
default: styles/application.scss
contrast: styles/contrast.scss
mastodon-light: styles/mastodon-light.scss
tangerineui: styles/tangerineui.scss
tangerineui-purple: styles/tangerineui-purple.scss
```

3. **Add a localized name (optional).** You can edit each desired language's locale file in `config/locales/[lang].yml` to add a localized string name for Tangerine UI. You need to do this for every language you expect your users to use. Otherwise, in their themes list, they will see the unlocalized theme name ("*tangerineui-purple*"), instead of a readable theme name ("*Tangerine UI (Purple)*").

```yml
themes:
  contrast: Mastodon (High contrast)
  default: Mastodon (Dark)
  mastodon-light: Mastodon (Light)
  tangerineui: Tangerine UI
  tangerineui-purple: Tangerine UI (Purple)
```

4. **Compile theme assets and restart.** Run `RAILS_ENV=production bundle exec rails assets:precompile` and restart your Mastodon instance for the changes to take effect.

Your users should now be able to choose '*Tangerine UI*', '*Tangerine UI (Purple)*', or '*Tangerine UI (Cherry)*' as their site theme:

![Screenshot : select Tangerine UI as a theme in appearance settings on Mastodon.](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/8cce803c-099b-4f25-8e39-e1c0da3aa6dc)

As an admin, you should also now be able to set Tangerine UI as the default theme for your instance (navigate to https://*domain*/admin/settings/appearance):

![Screenshot : select Tangerine UI as the default theme for your Mastodon instance in the administration panel.](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/05fcbb53-54de-40e4-89bd-199107116dfc)

## Installation for Glitch-soc admins

Tangerine UI does not yet support Glitch-soc's features and layout, but it can still be installed as a vanilla skin on your Glitch-soc instance:

1. **Copy the files** from `mastodon/app/javascript/styles/` [in this repository](https://github.com/nileane/TangerineUI-for-Mastodon/tree/legacy/mastodon/app/javascript/styles/) to your Mastodon themes directory `app/javascript/styles/`:

```sh
# Where $REPO is this repository, and $INSTALLDIR is your Glitch-soc installation.
cp -r $REPO/mastodon/app/javascript/styles/* $INSTALLDIR/app/javascript/styles
```

2. **Copy the files** from `mastodon/app/javascript/skins/vanilla/` [in this repository](https://github.com/nileane/TangerineUI-for-Mastodon/tree/legacy/mastodon/app/javascript/skins/vanilla/) to your Glitch-soc skins directory `app/javascript/skins/vanilla/`:

```sh
# Where $REPO is this repository, and $INSTALLDIR is your Glitch-soc installation.
cp -r $REPO/mastodon/app/javascript/skins/vanilla/* $INSTALLDIR/app/javascript/skins/vanilla
```

3. **Compile theme assets and restart.** Run `RAILS_ENV=production bundle exec rails assets:precompile` and restart your Glitch-soc instance for the changes to take effect.

Your users should now be able to select Tangerine UI as a theme in their settings, under Flavours → Vanilla Mastodon → Skin

![Glitch-soc settings. Flavours → Vanilla Mastodon → Skin](https://github.com/nileane/TangerineUI-for-Mastodon/assets/914451/abd931ab-685a-4d55-aa24-cb6356a19a7c)


## Installation for regular users
Even if you are not an admin on your instance, you can still use Tangerine UI with a browser extension:

1. Install any browser extension that allows you to inject CSS on a webpage, such as [Stylus](https://add0n.com/stylus.html), or [Live CSS Editor](https://github.com/webextensions/live-css-editor)
2. Copy & paste the contents of 🍊 [`TangerineUI.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/legacy/TangerineUI.css) to the extension's editor
   * 🪻 For the purple variant, copy the contents of [`TangerineUI-purple.css`](https://github.com/nileane/TangerineUI-for-Mastodon/blob/legacy/TangerineUI-purple.css) instead.

> [!IMPORTANT]
> If you are a user on a Glitch-soc instance, you must switch to the Vanilla Mastodon flavour for Tangerine UI to work properly: in your instance settings, navigate to *Flavours* → *Vanilla Mastodon* → select the '*Default*' skin.

> [!NOTE]
> Alternatively, if you wish to use a JavaScript browser extension, [@Write](https://github.com/Write) has written a ready-to-use UserScript to load Tangerine UI on any Mastodon instance. Check out [the TangerineUI-Userscript repository](https://github.com/Write/TangerineUI-Userscript) for instructions.

## Things to know
* **Tangerine UI Legacy only supports Mastodon's single column layout**. The advanced web interface (multiple columns) will not be affected.
* **Tangerine UI auto-switches from light to dark mode based on your OS preference**.
* **The [Cherry variant](https://github.com/nileane/TangerineUI-for-Mastodon#variants) is not available for Tangerine UI Legacy.**

## Accessibility
Please consider that some of your users may depend on Mastodon's High Contrast theme before [setting Tangerine UI as the only theme](#install-tangerine-ui-as-the-only-theme-on-your-instance) on your instance. For this reason, unless you're running a single-user instance, I recommend [installing Tangerine UI as an optional/revertable theme](#install-tangerine-ui-as-an-optional-theme-on-your-instance-recommended) instead.

## Credits
* The logo for Tangerine UI was designed by [Younis @younishd](https://younishd.fr). 🍊

## Support me <3
If you enjoy Tangerine UI, I would really appreciate a [tip 💛](https://ko-fi.com/nileane)!
