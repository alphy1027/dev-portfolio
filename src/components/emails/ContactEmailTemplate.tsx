import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { FormInputs } from '@/actions/formAction';
import Logo from '@/app/home/icons/Logo';
import { siteInfo } from '@/content/siteInfo';

interface TemplateProps {
  formData: FormInputs;
}

const baseUrl = siteInfo.siteURL

export const ContactEmailTemplate = ({ formData }: TemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>New Contact from Alphy.dev</Preview>
      <Container style={container}>
        <Section style={logoSection}>
          <Link style={logo} target="_blank" href={baseUrl}>
            <Logo />
          </Link>
        </Section>

        <Text style={subheading}>New Contact Form Submission from Alphy.dev Website</Text>
        <Text style={paragraph}>
          From: <span style={span}>{formData.fullName}</span>
        </Text>
        <Text style={paragraph}>
          Email: <span style={span}>{formData.email}</span>
        </Text>
        <Text style={paragraph}>Message:</Text>
        <Text style={paragraph}>{formData.message}</Text>
        <Section style={btnContainer}>
          <Button style={button} href={`mailto:${formData}`}>
            Reply to Sender
          </Button>
        </Section>

        <Text style={paragraph}>
          Best,
          <br />
          The Alphy.dev team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Alphy1027.dev | Nairobi, Kenya</Text>
      </Container>
    </Body>
  </Html>
);

const logo = {
  margin: "0 auto",
  fontSize: "24px",
  fontWeight: "800",
  width: "fit-content",
};

const logoSection = {
  borderRadius: "3px",
  backgroundColor: "#1e293b",
  height: "96px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 8px 48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const subheading = {
  fontSize: "18px",
  lineHeight: "26px",
  fontWeight: "700",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const span = {
  fontWeight: "500",
  fontSize: "18px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#10b981",
  borderRadius: "3px",
  color: "#fff",
  margin: "0 auto",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "16px 32px",
};


export default ContactEmailTemplate;
