import React from 'react';  

const TermSection = ({ title, children }) => {  
  return (  
    <div className="card mb-4 shadow">  
      <div className="card-body">  
        <h2 className="section-title">{title}</h2>  
        <p>{children}</p>  
      </div>  
    </div>  
  );  
};  

const TermsAndConditions = () => {  
  return (  
    <div className="container my-5">  
      <h1 className="text-center">Terms and Conditions</h1>  
      <p className="text-center text-muted"><strong>Last Updated: [Date]</strong></p>  

      <TermSection title="1. Acceptance of Terms">  
        By accessing or using the services provided by Portfolio Generator ("we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.  
      </TermSection>  

      <TermSection title="2. Changes to Terms">  
        We reserve the right to modify these Terms at any time. Changes will be effective upon posting on our website. Your continued use of the services after any changes constitutes acceptance of the new terms.  
      </TermSection>  

      <TermSection title="3. Eligibility">  
        You must be at least 13 years old to use our services. By using our services, you represent that you meet this requirement.  
      </TermSection>  

      <TermSection title="4. User Accounts">  
        You may be required to create an account to access certain features. You agree to maintain the confidentiality of your account information and are responsible for all activity under your account.  
      </TermSection>  

      <TermSection title="5. User Conduct">  
        You agree not to engage in any illegal or harmful activities while using our services. You are responsible for any content that you post or share.  
      </TermSection>  

      <TermSection title="6. Intellectual Property">  
        All content on our website is the property of Portfolio Generator or our licensors. You may not use, reproduce, or distribute any material without our prior written consent.  
      </TermSection>  

      <TermSection title="7. Disclaimer of Warranties">  
        Our services are provided on an "as is" basis without warranties of any kind. We do not guarantee that our services will be uninterrupted or error-free.  
      </TermSection>  
      
      <TermSection title="8. Limitation of Liability">  
        In no event shall Portfolio Generator, its affiliates, or its licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or related to your use or inability to use the services.  
      </TermSection>  

      <TermSection title="9. Privacy Policy">  
        Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and disclose information about you. By using our services, you consent to our collection and use of your information in accordance with our Privacy Policy.  
      </TermSection>  

      <TermSection title="10. Termination">  
        We reserve the right to suspend or terminate your access to our services at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users of our services, us, or third parties, or for any other reason.  
      </TermSection>  
      
      <TermSection title="11. Governing Law">  
        These Terms will be governed by and construed in accordance with the laws of [Your Jurisdiction], without giving effect to any principles of conflicts of law.  
      </TermSection>  

      <TermSection title="12. Changes to Services">  
        We reserve the right to modify or discontinue our services, or any part thereof, with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuation of our services.  
      </TermSection>  

      <TermSection title="13. Contact Information">  
        If you have any questions about these Terms, please contact us at: <strong className='text-dark'>cmadhavanofficial@gmail.com</strong>.  
      </TermSection>  
    </div>  
  );  
};  

export default TermsAndConditions;