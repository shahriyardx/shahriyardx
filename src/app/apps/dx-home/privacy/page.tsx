import Markdown from "@/app/blog/[slug]/markdown/Markdown"
import React from "react"

const md_text = `
**Last Updated:** 11/9/2025
This Privacy Policy explains how DxHome (“we,” “our,” or “the Extension”) handles user information. We are committed to protecting your privacy and ensuring that your browsing experience remains safe and secure.

## 1. Introduction

DxHome is a Chrome extension designed to enhance your new tab page experience. It provides a minimalistic clock display and allows users to add and manage shortcuts, similar to the default Google new tab.

We value your trust and want you to understand that your privacy is extremely important to us. This document describes in detail how your information is handled when you use DxHome.

## 2. Information We Collect

We do not collect, store, or process any personally identifiable information (PII) from users.

Specifically:
- Personal Data: Not collected. We do not ask for your name, email, or any other personal identifiers.
- Browsing Data: Not collected. We do not track the websites you visit, your search history, or your activity.
- Usage Data: Not collected. We do not use analytics tools or tracking pixels.
- Location Data: Not collected. We do not request or access your location.

All data related to your shortcuts or preferences is stored locally within your browser. This means it stays on your device and is never transmitted to us or any third party.

## 3. How Information is Used

Since we do not collect data, there is no use, processing, or transfer of information. Any settings or shortcuts you create within DxHome are solely for your own use and remain under your control.

## 4. Data Storage and Security

All preferences, shortcuts, and settings are saved directly in your browser’s local storage.

No external servers or databases are used.

If you uninstall the extension, all locally stored data will be automatically removed.

## 5. Sharing of Information

We do not share, sell, rent, or disclose any user data to third parties.

## 6. Third-Party Services

DxHome does not integrate with, send information to, or rely on third-party services, trackers, or analytics providers.

## 7. Children’s Privacy

DxHome is safe for users of all ages, including children. Since we do not collect any data, we fully comply with the Children’s Online Privacy Protection Act (COPPA) and similar global regulations.

## 8. Your Control Over Data

Because your data is stored locally:
- You may clear your shortcuts and settings at any time by resetting the extension or clearing your browser data.
- You can permanently remove all stored data by uninstalling the extension.

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect improvements to the extension or changes in applicable laws. Any updates will be posted on this page with a new “Effective Date.” We encourage you to review this page periodically.

## 10. Contact Us

If you have questions, concerns, or feedback about this Privacy Policy or DxHome in general, you can reach us at:

📧 mdshahriyaralam9@gmail.com
`

const Privacy = () => {
	return (
		<div className="mt-10">
			<h1 className="text-7xl font-bold text-center">DXHome</h1>
			<p className="text-zinc-500 text-2xl text-center">Privacy Policy</p>
			<div
				className="
mt-10 prose prose-invert prose-green prose-pre:p-0 
mx-auto max-w-5xl prose-headings:p-0 prose-headings:m-0 
prose-p:m-0 prose-p:mt-2 prose-p:mb-5
"
			>
				<Markdown content={md_text} />
			</div>
		</div>
	)
}

export default Privacy
