"use client"

import { Typography } from "@edust/ui"

export default function TermsAndPrivacyPolicy() {
  return (
    <div className="container p-12">
      <title>TermsAndPrivacyPolicy</title>
      <Typography variant="h1" className="pb-5 mb-10 text-center border-b-1 !border-gray-600">Terms of Service & Privacy Policy</Typography>
      <Typography variant="h2" className="my-6 tracking-wide">Edust</Typography>

      <Typography variant="p" className="mb-6 !mt-0 text-justify">Welcome to Edust (the “Platform,” “we,” “us,” or “our”). These Terms of Service and Privacy Policy (collectively, the “Agreement”) govern your access to and use of our services, including the website, applications, and related content (collectively, the “Services”). By registering, accessing, or using the Services, you agree to be bound by this Agreement. If you do not agree with any part of this Agreement, you must discontinue use of the Services immediately.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">Our Platform is designed to serve students, teachers, and administrators by providing a comprehensive e-learning environment. To use the Services, you must be at least 13 years old. Users under the age of 18 must have explicit consent from a parent or legal guardian. Users are responsible for maintaining the confidentiality of their account credentials and for any activities conducted under their accounts. Prompt notification to us is required upon any unauthorized use or security breach of your account.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">You agree to use the Services lawfully and ethically. Any content you submit, upload, or share must not infringe upon intellectual property rights or violate any laws or regulations. Prohibited behaviors include, but are not limited to, transmitting harmful, offensive, defamatory, or unlawful content; attempting to interfere with or disrupt the Services; or impersonating others.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">Teachers retain ownership of all original content they create and upload to the Platform. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to host, reproduce, distribute, and display such content solely within the scope of the Platform’s Services. We reserve the right to remove or restrict access to any content that violates this Agreement or applicable laws.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">While we strive to provide uninterrupted access, we reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, without prior notice. We may also update this Agreement periodically; continued use of the Services constitutes acceptance of those changes. We reserve the right to suspend or terminate accounts at our sole discretion for violations of this Agreement or misuse of the Platform.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">We implement industry-standard technical and organizational measures to safeguard your personal information. However, no online system is completely secure, and you acknowledge and accept this inherent risk. We do not sell or rent your personal data to third parties. Personal information may be shared with trusted service providers for the purposes of payment processing, analytics, or compliance with legal obligations, always under strict confidentiality and data protection commitments.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">The personal data we collect varies by user role but generally includes identifying information (such as name and email), usage data (including course engagement and activity logs), and, where applicable, payment details securely handled by third parties. We retain this data only as long as necessary to fulfill the purposes outlined in this Agreement, or as required by law.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">The Platform is not intended for children under 13, and we do not knowingly collect personal information from such individuals without verifiable parental consent. Users located outside of \[Insert Country] should be aware that their data may be transferred to and processed in \[Insert Country] and other jurisdictions, in accordance with applicable data protection laws.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">You have the right to access, correct, or request deletion of your personal information by accessing your account settings or contacting us directly. Requests will be handled in compliance with legal and operational requirements.</Typography>
      <Typography variant="p" className="mb-6 !mt-0 text-justify">By using our Services, you agree that any disputes related to this Agreement will be governed by the laws of \[Insert Jurisdiction], without regard to its conflict of law principles.</Typography>

      <div className="flex w-full justify-between text-[#a1a1a1]">
        <Typography variant="p" className="!mt-0">Effective Date: 2025</Typography>
        <Typography variant="p" className="!mt-0">Last Updated: 2025</Typography>
      </div>
      <br/>
      <Typography variant="p" className="mb-2">For any questions or concerns regarding these Terms of Service or our Privacy Policy, please contact us at:</Typography>

      <Typography variant="p" className="!mt-0">support@edust.com / privacy@edust.com</Typography>
    </div>
  )
}
