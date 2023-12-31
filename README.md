# cx_desktop: Open-source online feedback channel for CXM platform
![hearme station](docs/imgs/hearme_cx.png)

## Description

The **hearme cx_desktop** module is an open-source repository that enables clients to modify the UI and application logic according to their needs. This module allows users to create a web app for collecting feedback in the **online channel**, running in a desktop browser. It is an integral part of the **hearme** CXM platform, which offers a comprehensive suite of tools for collecting and analyzing customer feedback.

- **hearme cx_desktop** utilizes services from the **hearme** platform, providing a complete set of tools for collecting and analyzing customer feedback.

- With **hearme cx_desktop**, you can customize the feedback screen to align with your brand or intercept feedback events before and after sending feedback. Every feedback logic is processed, and you can configure questionnaires in the administration application.

- You can include customer and additional information in the feedback by transferring parameters into the link of this module. This allows the CX manager to track customer information for each feedback, supporting the Close the Loop activity.

- Manage your feedback through the **hearme** web application at [hearme.vn/zeus](hearme.vn/zeus) or by installing the **hearme CXM** mobile app on your iOS or Android device.


## Use cases

**1. Unified Customer Feedback Collection Across Channels**

- Scenario: You want to collect customer feedback seamlessly across various communication channels.
- Enhancement: Our open-source CXM platform empowers you to implement custom logic for intercept processing, tailor the feedback collection process to your specific needs.

**2. Custom Application Development for Feedback Collection**

- Scenario: You have unique requirements and wish to develop your own applications for customer feedback collection.
- Enhancement: The flexibility of our open-source CXM platform extends to empowering you to build your own applications for customer feedback collection. Leverage our modular and customizable framework to create apps tailored to your brand's specific requirements.

**3. Becoming a CXM Provider with Your Trademark**

- Scenario: You aspire to establish yourself as a CXM (Customer Experience Management) provider with a distinctive brand.

- Enhancement: Transform your vision into reality by adopting our open-source modules. Incorporate them into your CXM platform and customize them with your own trademark. This empowers you to deliver a unique and branded CXM experience to your clients.

- Benefits: By utilizing our open-source modules, you not only expedite the development process but also gain the flexibility to shape the platform according to your branding strategy. This positions you as a dynamic CXM provider with a unique identity in the market.

## hearme architechture
![hearme architectur](docs/imgs/hearme_components.png)

## Related open-source modules

- [hearme Zeus](https://github.com/hearme-vn/hearme-Zeus)
- [mobile Zeus](https://github.com/hearme-vn/mobile-Zeus)
- [hearme station](https://github.com/hearme-vn/hearme_station)
- [cx mobile](https://github.com/hearme-vn/cx_mobile) 
- and [cx desktop](https://github.com/hearme-vn/cx_desktop)


## Demonstration:
- Online feedback channel: https://www.youtube.com/watch?v=ThOjFk_Ztv8&list=PLFoi8tG0KXO-mViolS5_1orwIA4GZwYid 
- Feedback Kiosk: https://www.youtube.com/watch?v=mVtSCCnoaVI

## Help for developing application:

1. **Full Programming APIs:** [Hearme for Developers APIs version 2.0.1](https://hearme.vn/help/statics/hearme_dev_APIs_v2.0.1.pdf)
2. **Integration for Online feedback Channel:** [Hearme for Online Channel 2.0.1](https://hearme.vn/help/statics/hearme_dev_APIs_ONLINE_v2.0.1.pdf)
3. **Integration for feedback Kiosk:** [Hearme for Kiosk Channel 2.0.1](https://hearme.vn/help/statics/hearme_dev_APIs_SYN_v2.0.1.pdf)
4. **Integration with Zapier:** [Hearme - Zapier Integration](https://hearme.vn/help/statics/hearme-zapier-documentation_202208.pdf)
5. **Help:** [Other integration](https://hearme.vn/help/en/integration/)



# Steps to collect feedback through online channel


## Enviroment requirements for this project
- Nodejs >= 8.17
- Ionic >= 2


## Run poroject

Install and start web platform

```bash
$ sudo npm install -g ionic
$ ionic serve
```

Build to release for web:

```
$ionic build –-prod
```

## Getting started to collect feedbacks with hearme platform

1. Register a **hearme** account at website [hearme.vn](https://hearme.vn/) 
2. Once you have registered, you can configure your account as steps guided in the onboarding page. Please look for detail information in [help page](https://hearme.vn/help/en/implementation/)

3. Create and get survey link for [web channel device](https://hearme.vn/help/en/admin/#web-survey-channel)
4. Change root domain: https://cx.hearme.vn/d/ with your domain hosting this project
5. You can add parameters, attach extra information to feedback link. Refer information at: [Hearme for Online Channel 2.0.1](https://hearme.vn/help/statics/hearme_dev_APIs_ONLINE_v2.0.1.pdf)


# hearme versions and roadmap

## Version 4.x - Upcoming with AI
- CX Expert Assistant powered by AI for CX practitioners
- Employee Assistant
- Customer Assistant integrated into feedback channels

## Version 3.x
This software version brings significant improvements in user experience and introduces many important features:

- On-boarding page: helps new users easily understand and configure the system step by step.
- Dashboard system: helps administrators quickly grasp system performance and important information up to the current moment.
- Correlation data analysis: helps business leaders identify important factors and positive factors affecting customer satisfaction, thereby helping businesses come up with plans to improve customer satisfaction scores.
- System to support survey question setup: allows the creation of survey sets from sample surveys for each field, export/import survey configuration data, and preview survey screens directly on the management system. Configuring survey questions is also easier and more straightforward.
- Survey analysis features are also upgraded for a better user experience.
- System for managing alert messages and system notification messages.

## Version 2.6.0
- Integration with multi-channel sales system: nhanh.vn
- Providing an interface for system integration via Zapier
- Improved security for the hook registration function in the hearme system
- Optimized the submission of evaluation data when the device has an unstable connection

# Support information

Whenever you have a support request, you can reach out to Hearme using the following methods:

1. **Help document:** [https://hearme.vn/help/en/](https://hearme.vn/help/en/)
2. **Facebook:** [https://fb.com/hearme.vn](https://fb.com/hearme.vn)
3. **FAQs:** [http://Support.hearme.vn](http://support.hearme.vn)
4. **Email for assistance:** [contact@hearme.vn](mailto:contact@hearme.vn)
