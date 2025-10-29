const Apify = require('apify');
const nodemailer = require('nodemailer');
const fs = require('fs');
const Papa = require('papaparse');

Apify.main(async () => {
    // Read the CSV from repository
    const file = fs.readFileSync('./email.csv', 'utf8');
    const { data: contacts } = Papa.parse(file, { header: true });

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD, // Use App Password if Gmail
        },
    });

    // Email content
    const mailContent = `
Hi team,

If you’re maintaining your API documentation with tools like Swagger UI, ReDoc, Stoplight, or Postman, you might already know the pain of fragmented workflows, manual updates, and inconsistent developer experiences.

Apidog Docs was built to fix that. It’s not just another API documentation generator, it's a fully integrated workspace that connects design, testing, and documentation into one live system.

Here’s why teams are switching to Apidog Docs:

🧠 One source of truth: Design, mock, test, and document your APIs from the same schema no sync issues.

⚡ Instant updates: Your docs update automatically whenever your API spec changes.

🎨 Beautiful and interactive: Modern UI, built-in authentication, and “Try it now” support.

🔗 Collaborative: Invite devs, PMs, and QA to comment and contribute in real time.

🔒 Secure & scalable: Role-based access control, custom domains, and private workspace hosting.

Whether you’re using Swagger, ReDoc, or Stoplight, Apidog Docs can replace them all with a faster, unified workflow with no plugins or third-party syncs needed.

👉 Explore a live demo here: https://apidog.com/docs

Would you be open to testing it out or migrating one of your existing specs for comparison?

Best,
[Bill]
Developer Relations | Apidog
[bill@inc.apidog.com]
https://apidog.com
`;

    // Send individual email to each contact
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    for (const contact of contacts) {
        if (!contact.email) continue;
        try {
            await transporter.sendMail({
                from: process.env.EMAIL,
                to: contact.email,
                subject: 'Apidog Docs – Unified API Documentation Workspace',
                text: mailContent,
            });
            consol
