import Markdown from "@/app/blog/[slug]/markdown/Markdown"
import React from "react"

const md_text = `
**Last Updated:** 15/5/2025

Your privacy is our priority. This Privacy Policy outlines how Todx handles user information and data.

## 1. Data Collection

Todx is designed with your privacy in mind. We **do not collect, store, or transmit any personal information** from your device. We respect your privacy and ensure that your data stays securely on your device.

## 2. App Permissions

**Todx does not request any special permissions to access data or hardware on your device.**

## 3. Data Storage

All tasks and related data created within the app are stored locally on your device. No information is transmitted to or stored on any external servers.

## 4. Third-Party Services

Todx does not use any third-party services for analytics, advertising, or data collection.

## 5. Authentication

Todx does not require user authentication, and no personal credentials are collected or stored.

## 6. Data Sharing

Todx does not share any data with third parties. Your information remains private and stays on your device.

## 7. User Data Management

If you wish to delete your data, you can simply uninstall the app or clear the app’s data from your device settings. This will permanently remove all tasks and information stored locally by Todx on your device.

## 8. Children’s Privacy
Todx is rated for users aged 3+. While the app's content is generally suitable for a wide audience, Todx is designed as a personal productivity tool and is not specifically targeted at children under the age of 13. Due to the nature of the app storing all data locally and not collecting any personal information, we do not knowingly process or have access to any data from children under 13. We encourage parents and guardians to monitor their children’s use of digital content.

## 9. Changes to This Privacy Policy

We may update this privacy policy from time to time. Any changes will be reflected here. We recommend that you review this policy periodically to stay informed of any updates.

------

If you have any questions or concerns about this privacy policy, feel free to contact us at [mdshahriyaralam552@gmail.com](mailto:mdshahriyaralam552@gmail.com)

------
`

const Privacy = () => {
	return (
		<div className="mt-10">
			<h1 className="text-7xl font-bold text-center">TODX</h1>
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
