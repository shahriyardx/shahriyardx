import Markdown from "@/app/blog/[slug]/markdown/Markdown"
import React from "react"

const md_text = `
Your privacy is our priority. This Privacy Policy outlines how Todx handles user information and data.

## 1. Data Collection
Todx does not collect, store, or process any personal information. We respect your privacy and ensure that your data stays on your device.

## 2. Data Storage
All tasks and related data created within the app are stored locally on your device. No information is transmitted to or stored on any external servers.

## 3. Third-Party Services
Todx does not use any third-party services for analytics, advertising, or data collection.

## 4. Authentication
Todx does not require user authentication, and no personal credentials are collected or stored.

## 5. Data Sharing
Todx does not share any data with third parties. Your information remains private and stays on your device.

## 6. User Data Management
If you wish to delete your data, you can simply uninstall the app or clear the app’s data from your device settings.

## 7. Children’s Privacy
Todx is not intended for use by children. The app is designed for users aged 13 and above.

## 8. Changes to This Privacy Policy
We may update this privacy policy from time to time. Any changes will be reflected here. We recommend that you review this policy periodically to stay informed of any updates.

----

If you have any questions or concerns about this privacy policy, feel free to contact us at [contact@shahriyar.dev](mailto:contact@shahriyar.dev).

----
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
