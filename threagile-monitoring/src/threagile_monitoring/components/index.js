import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from "./App";
import Dashboard from './Dashboard'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

// Temporarily hard coded, make dynamic import
const risksJson = [
  {
    category: 'missing-authentication',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Authentication\u003c/b\u003e covering communication link \u003cb\u003eCMS Content Traffic\u003c/b\u003e from \u003cb\u003eLoad Balancer\u003c/b\u003e to \u003cb\u003eMarketing CMS\u003c/b\u003e',
    synthetic_id:
      'missing-authentication@load-balancer\u003ecms-content-traffic@load-balancer@marketing-cms',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'load-balancer\u003ecms-content-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'missing-authentication',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Authentication\u003c/b\u003e covering communication link \u003cb\u003eNFS Filesystem Access\u003c/b\u003e from \u003cb\u003eBackoffice ERP System\u003c/b\u003e to \u003cb\u003eContract Fileserver\u003c/b\u003e',
    synthetic_id:
      'missing-authentication@erp-system\u003enfs-filesystem-access@erp-system@contract-fileserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'contract-fileserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'erp-system\u003enfs-filesystem-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['contract-fileserver']
  },
  {
    category: 'ldap-injection',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eLDAP-Injection\u003c/b\u003e risk at \u003cb\u003eIdentity Provider\u003c/b\u003e against LDAP server \u003cb\u003eLDAP Auth Server\u003c/b\u003e via \u003cb\u003eLDAP Credential Check Traffic\u003c/b\u003e',
    synthetic_id:
      'ldap-injection@identity-provider@ldap-auth-server@identity-provider\u003eldap-credential-check-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'identity-provider',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'identity-provider\u003eldap-credential-check-traffic',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['ldap-auth-server']
  },
  {
    category: 'ldap-injection',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eLDAP-Injection\u003c/b\u003e risk at \u003cb\u003eMarketing CMS\u003c/b\u003e against LDAP server \u003cb\u003eLDAP Auth Server\u003c/b\u003e via \u003cb\u003eAuth Traffic\u003c/b\u003e',
    synthetic_id:
      'ldap-injection@marketing-cms@ldap-auth-server@marketing-cms\u003eauth-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'marketing-cms\u003eauth-traffic',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['ldap-auth-server']
  },
  {
    category: 'push-instead-of-pull-deployment',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003ePush instead of Pull Deployment\u003c/b\u003e at \u003cb\u003eApache Webserver\u003c/b\u003e via build pipeline asset \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id: 'push-instead-of-pull-deployment@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'jenkins-buildserver\u003eapplication-deployment',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'push-instead-of-pull-deployment',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003ePush instead of Pull Deployment\u003c/b\u003e at \u003cb\u003eMarketing CMS\u003c/b\u003e via build pipeline asset \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id: 'push-instead-of-pull-deployment@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'jenkins-buildserver\u003ecms-updates',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'unencrypted-communication',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Communication\u003c/b\u003e named \u003cb\u003eAuth Traffic\u003c/b\u003e between \u003cb\u003eMarketing CMS\u003c/b\u003e and \u003cb\u003eLDAP Auth Server\u003c/b\u003e transferring authentication data (like credentials, token, session-id, etc.)',
    synthetic_id:
      'unencrypted-communication@marketing-cms\u003eauth-traffic@marketing-cms@ldap-auth-server',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'marketing-cms\u003eauth-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['ldap-auth-server']
  },
  {
    category: 'unencrypted-communication',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Communication\u003c/b\u003e named \u003cb\u003eWeb Application Traffic\u003c/b\u003e between \u003cb\u003eLoad Balancer\u003c/b\u003e and \u003cb\u003eApache Webserver\u003c/b\u003e transferring authentication data (like credentials, token, session-id, etc.)',
    synthetic_id:
      'unencrypted-communication@load-balancer\u003eweb-application-traffic@load-balancer@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'load-balancer',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'load-balancer\u003eweb-application-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'unencrypted-communication',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Communication\u003c/b\u003e named \u003cb\u003eDatabase Traffic\u003c/b\u003e between \u003cb\u003eBackoffice ERP System\u003c/b\u003e and \u003cb\u003eCustomer Contract Database\u003c/b\u003e transferring authentication data (like credentials, token, session-id, etc.)',
    synthetic_id:
      'unencrypted-communication@erp-system\u003edatabase-traffic@erp-system@sql-database',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'erp-system\u003edatabase-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['sql-database']
  },
  {
    category: 'unencrypted-communication',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnencrypted Communication\u003c/b\u003e named \u003cb\u003eNFS Filesystem Access\u003c/b\u003e between \u003cb\u003eBackoffice ERP System\u003c/b\u003e and \u003cb\u003eContract Fileserver\u003c/b\u003e',
    synthetic_id:
      'unencrypted-communication@erp-system\u003enfs-filesystem-access@erp-system@contract-fileserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'erp-system\u003enfs-filesystem-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['contract-fileserver']
  },
  {
    category: 'unguarded-access-from-internet',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnguarded Access from Internet\u003c/b\u003e of \u003cb\u003eGit Repository\u003c/b\u003e by \u003cb\u003eExternal Development Client\u003c/b\u003e via \u003cb\u003eGit-Repo Code Write Access\u003c/b\u003e',
    synthetic_id:
      'unguarded-access-from-internet@git-repo@external-dev-client@external-dev-client\u003egit-repo-code-write-access',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'external-dev-client\u003egit-repo-code-write-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'unguarded-access-from-internet',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnguarded Access from Internet\u003c/b\u003e of \u003cb\u003eGit Repository\u003c/b\u003e by \u003cb\u003eExternal Development Client\u003c/b\u003e via \u003cb\u003eGit-Repo Web-UI Access\u003c/b\u003e',
    synthetic_id:
      'unguarded-access-from-internet@git-repo@external-dev-client@external-dev-client\u003egit-repo-web-ui-access',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'external-dev-client\u003egit-repo-web-ui-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'unguarded-access-from-internet',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnguarded Access from Internet\u003c/b\u003e of \u003cb\u003eJenkins Buildserver\u003c/b\u003e by \u003cb\u003eExternal Development Client\u003c/b\u003e via \u003cb\u003eJenkins Web-UI Access\u003c/b\u003e',
    synthetic_id:
      'unguarded-access-from-internet@jenkins-buildserver@external-dev-client@external-dev-client\u003ejenkins-web-ui-access',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'external-dev-client\u003ejenkins-web-ui-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['jenkins-buildserver']
  },
  {
    category: 'missing-vault',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Vault (Secret Storage)\u003c/b\u003e in the threat model (referencing asset \u003cb\u003eBackoffice ERP System\u003c/b\u003e as an example)',
    synthetic_id: 'missing-vault@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: []
  },
  {
    category: 'missing-file-validation',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing File Validation\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id: 'missing-file-validation@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'container-baseimage-backdooring',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eContainer Base Image Backdooring\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id: 'container-baseimage-backdooring@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'container-baseimage-backdooring',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eContainer Base Image Backdooring\u003c/b\u003e risk at \u003cb\u003eMarketing CMS\u003c/b\u003e',
    synthetic_id: 'container-baseimage-backdooring@marketing-cms',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'missing-waf',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Web Application Firewall (WAF)\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id: 'missing-waf@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'missing-waf',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Web Application Firewall (WAF)\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id: 'missing-waf@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'missing-waf',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Web Application Firewall (WAF)\u003c/b\u003e risk at \u003cb\u003eIdentity Provider\u003c/b\u003e',
    synthetic_id: 'missing-waf@identity-provider',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'identity-provider',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['identity-provider']
  },
  {
    category: 'missing-waf',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Web Application Firewall (WAF)\u003c/b\u003e risk at \u003cb\u003eMarketing CMS\u003c/b\u003e',
    synthetic_id: 'missing-waf@marketing-cms',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'server-side-request-forgery',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eServer-Side Request Forgery (SSRF)\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e server-side web-requesting the target \u003cb\u003eBackoffice ERP System\u003c/b\u003e via \u003cb\u003eERP System Traffic\u003c/b\u003e',
    synthetic_id:
      'server-side-request-forgery@apache-webserver@erp-system@apache-webserver\u003eerp-system-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'apache-webserver\u003eerp-system-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['apache-webserver', 'marketing-cms']
  },
  {
    category: 'server-side-request-forgery',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eServer-Side Request Forgery (SSRF)\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e server-side web-requesting the target \u003cb\u003eIdentity Provider\u003c/b\u003e via \u003cb\u003eAuth Credential Check Traffic\u003c/b\u003e',
    synthetic_id:
      'server-side-request-forgery@apache-webserver@identity-provider@apache-webserver\u003eauth-credential-check-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'apache-webserver\u003eauth-credential-check-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['apache-webserver', 'marketing-cms']
  },
  {
    category: 'xml-external-entity',
    risk_status: 'unchecked',
    severity: 'high',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eXML External Entity (XXE)\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id: 'xml-external-entity@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'missing-hardening',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Hardening\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id: 'missing-hardening@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'missing-hardening',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Hardening\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id: 'missing-hardening@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'missing-hardening',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Hardening\u003c/b\u003e risk at \u003cb\u003eCustomer Contract Database\u003c/b\u003e',
    synthetic_id: 'missing-hardening@sql-database',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'sql-database',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['sql-database']
  },
  {
    category: 'missing-hardening',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Hardening\u003c/b\u003e risk at \u003cb\u003eIdentity Provider\u003c/b\u003e',
    synthetic_id: 'missing-hardening@identity-provider',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'identity-provider',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['identity-provider']
  },
  {
    category: 'missing-hardening',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Hardening\u003c/b\u003e risk at \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id: 'missing-hardening@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['jenkins-buildserver']
  },
  {
    category: 'missing-hardening',
    risk_status: 'mitigated',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Hardening\u003c/b\u003e risk at \u003cb\u003eLDAP Auth Server\u003c/b\u003e',
    synthetic_id: 'missing-hardening@ldap-auth-server',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'ldap-auth-server',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['ldap-auth-server']
  },
  {
    category: 'unchecked-deployment',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnchecked Deployment\u003c/b\u003e risk at \u003cb\u003eExternal Development Client\u003c/b\u003e',
    synthetic_id: 'unchecked-deployment@external-dev-client',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'external-dev-client',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'possible',
    data_breach_technical_assets: [
      'external-dev-client',
      'git-repo',
      'jenkins-buildserver'
    ]
  },
  {
    category: 'unchecked-deployment',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnchecked Deployment\u003c/b\u003e risk at \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id: 'unchecked-deployment@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'possible',
    data_breach_technical_assets: [
      'jenkins-buildserver',
      'apache-webserver',
      'marketing-cms'
    ]
  },
  {
    category: 'unchecked-deployment',
    risk_status: 'unchecked',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eUnchecked Deployment\u003c/b\u003e risk at \u003cb\u003eGit Repository\u003c/b\u003e',
    synthetic_id: 'unchecked-deployment@git-repo',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'missing-identity-propagation',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Enduser Identity Propagation\u003c/b\u003e over communication link \u003cb\u003eERP System Traffic\u003c/b\u003e from \u003cb\u003eApache Webserver\u003c/b\u003e to \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id:
      'missing-identity-propagation@apache-webserver\u003eerp-system-traffic@apache-webserver@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'apache-webserver\u003eerp-system-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eCMS Content Traffic\u003c/b\u003e from \u003cb\u003eCustomer Web Client\u003c/b\u003e forwarded via \u003cb\u003eLoad Balancer\u003c/b\u003e to \u003cb\u003eMarketing CMS\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@load-balancer\u003ecms-content-traffic@load-balancer@marketing-cms',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'load-balancer\u003ecms-content-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eDB Update Access\u003c/b\u003e from \u003cb\u003eBackend Admin Client\u003c/b\u003e to \u003cb\u003eCustomer Contract Database\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@backend-admin-client\u003edb-update-access@backend-admin-client@sql-database',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'sql-database',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backend-admin-client\u003edb-update-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['sql-database']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eERP Internal Access\u003c/b\u003e from \u003cb\u003eBackoffice Client\u003c/b\u003e to \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@backoffice-client\u003eerp-internal-access@backoffice-client@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backoffice-client\u003eerp-internal-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eERP Web Access\u003c/b\u003e from \u003cb\u003eBackend Admin Client\u003c/b\u003e to \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@backend-admin-client\u003eerp-web-access@backend-admin-client@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backend-admin-client\u003eerp-web-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eGit-Repo Code Write Access\u003c/b\u003e from \u003cb\u003eExternal Development Client\u003c/b\u003e to \u003cb\u003eGit Repository\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@external-dev-client\u003egit-repo-code-write-access@external-dev-client@git-repo',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'external-dev-client\u003egit-repo-code-write-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eGit-Repo Web-UI Access\u003c/b\u003e from \u003cb\u003eExternal Development Client\u003c/b\u003e to \u003cb\u003eGit Repository\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@external-dev-client\u003egit-repo-web-ui-access@external-dev-client@git-repo',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'external-dev-client\u003egit-repo-web-ui-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eJenkins Web-UI Access\u003c/b\u003e from \u003cb\u003eExternal Development Client\u003c/b\u003e to \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@external-dev-client\u003ejenkins-web-ui-access@external-dev-client@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'external-dev-client\u003ejenkins-web-ui-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['jenkins-buildserver']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eUser Management Access\u003c/b\u003e from \u003cb\u003eBackend Admin Client\u003c/b\u003e to \u003cb\u003eLDAP Auth Server\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@backend-admin-client\u003euser-management-access@backend-admin-client@ldap-auth-server',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'ldap-auth-server',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backend-admin-client\u003euser-management-access',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['ldap-auth-server']
  },
  {
    category: 'missing-authentication-second-factor',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMissing Two-Factor Authentication\u003c/b\u003e covering communication link \u003cb\u003eWeb Application Traffic\u003c/b\u003e from \u003cb\u003eCustomer Web Client\u003c/b\u003e forwarded via \u003cb\u003eLoad Balancer\u003c/b\u003e to \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id:
      'missing-authentication-second-factor@load-balancer\u003eweb-application-traffic@load-balancer@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'load-balancer\u003eweb-application-traffic',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'accidental-secret-leak',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eAccidental Secret Leak (Git)\u003c/b\u003e risk at \u003cb\u003eGit Repository\u003c/b\u003e: \u003cu\u003eGit Leak Prevention\u003c/u\u003e',
    synthetic_id: 'accidental-secret-leak@git-repo',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'code-backdooring',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eCode Backdooring\u003c/b\u003e risk at \u003cb\u003eGit Repository\u003c/b\u003e',
    synthetic_id: 'code-backdooring@git-repo',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'code-backdooring',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eCode Backdooring\u003c/b\u003e risk at \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id: 'code-backdooring@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: [
      'marketing-cms',
      'jenkins-buildserver',
      'apache-webserver'
    ]
  },
  {
    category: 'dos-risky-access-across-trust-boundary',
    risk_status: 'in-progress',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eDenial-of-Service\u003c/b\u003e risky access of \u003cb\u003eApache Webserver\u003c/b\u003e by \u003cb\u003eCustomer Web Client\u003c/b\u003e via \u003cb\u003eCustomer Traffic\u003c/b\u003e forwarded via \u003cb\u003eLoad Balancer\u003c/b\u003e',
    synthetic_id:
      'dos-risky-access-across-trust-boundary@apache-webserver@customer-client@customer-client\u003ecustomer-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'customer-client\u003ecustomer-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: []
  },
  {
    category: 'dos-risky-access-across-trust-boundary',
    risk_status: 'in-progress',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eDenial-of-Service\u003c/b\u003e risky access of \u003cb\u003eBackoffice ERP System\u003c/b\u003e by \u003cb\u003eApache Webserver\u003c/b\u003e via \u003cb\u003eERP System Traffic\u003c/b\u003e',
    synthetic_id:
      'dos-risky-access-across-trust-boundary@erp-system@apache-webserver@apache-webserver\u003eerp-system-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'apache-webserver\u003eerp-system-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: []
  },
  {
    category: 'dos-risky-access-across-trust-boundary',
    risk_status: 'in-progress',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eDenial-of-Service\u003c/b\u003e risky access of \u003cb\u003eBackoffice ERP System\u003c/b\u003e by \u003cb\u003eBackoffice Client\u003c/b\u003e via \u003cb\u003eERP Internal Access\u003c/b\u003e',
    synthetic_id:
      'dos-risky-access-across-trust-boundary@erp-system@backoffice-client@backoffice-client\u003eerp-internal-access',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backoffice-client\u003eerp-internal-access',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: []
  },
  {
    category: 'dos-risky-access-across-trust-boundary',
    risk_status: 'in-progress',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eDenial-of-Service\u003c/b\u003e risky access of \u003cb\u003eIdentity Provider\u003c/b\u003e by \u003cb\u003eApache Webserver\u003c/b\u003e via \u003cb\u003eAuth Credential Check Traffic\u003c/b\u003e',
    synthetic_id:
      'dos-risky-access-across-trust-boundary@identity-provider@apache-webserver@apache-webserver\u003eauth-credential-check-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'identity-provider',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'apache-webserver\u003eauth-credential-check-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: []
  },
  {
    category: 'dos-risky-access-across-trust-boundary',
    risk_status: 'in-progress',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eDenial-of-Service\u003c/b\u003e risky access of \u003cb\u003eLDAP Auth Server\u003c/b\u003e by \u003cb\u003eMarketing CMS\u003c/b\u003e via \u003cb\u003eAuth Traffic\u003c/b\u003e',
    synthetic_id:
      'dos-risky-access-across-trust-boundary@ldap-auth-server@marketing-cms@marketing-cms\u003eauth-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'ldap-auth-server',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'marketing-cms\u003eauth-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: []
  },
  {
    category: 'sql-nosql-injection',
    risk_status: 'unchecked',
    severity: 'high',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eSQL/NoSQL-Injection\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e against database \u003cb\u003eCustomer Contract Database\u003c/b\u003e via \u003cb\u003eDatabase Traffic\u003c/b\u003e',
    synthetic_id:
      'sql-nosql-injection@erp-system@sql-database@erp-system\u003edatabase-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'erp-system\u003edatabase-traffic',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['sql-database']
  },
  {
    category: 'path-traversal',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003ePath-Traversal\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e against filesystem \u003cb\u003eContract Fileserver\u003c/b\u003e via \u003cb\u003eNFS Filesystem Access\u003c/b\u003e',
    synthetic_id:
      'path-traversal@erp-system@contract-fileserver@erp-system\u003enfs-filesystem-access',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'erp-system\u003enfs-filesystem-access',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['contract-fileserver']
  },
  {
    category: 'untrusted-deserialization',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'very-high',
    title:
      '\u003cb\u003eUntrusted Deserialization\u003c/b\u003e risk at \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id: 'untrusted-deserialization@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['jenkins-buildserver']
  },
  {
    category: 'untrusted-deserialization',
    risk_status: 'accepted',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'very-high',
    title:
      '\u003cb\u003eUntrusted Deserialization\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id: 'untrusted-deserialization@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'cross-site-scripting',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eCross-Site Scripting (XSS)\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id: 'cross-site-scripting@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'cross-site-scripting',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eCross-Site Scripting (XSS)\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e',
    synthetic_id: 'cross-site-scripting@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'cross-site-scripting',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eCross-Site Scripting (XSS)\u003c/b\u003e risk at \u003cb\u003eIdentity Provider\u003c/b\u003e',
    synthetic_id: 'cross-site-scripting@identity-provider',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'identity-provider',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['identity-provider']
  },
  {
    category: 'cross-site-scripting',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eCross-Site Scripting (XSS)\u003c/b\u003e risk at \u003cb\u003eMarketing CMS\u003c/b\u003e',
    synthetic_id: 'cross-site-scripting@marketing-cms',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'possible',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'cross-site-request-forgery',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eCross-Site Request Forgery (CSRF)\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e via \u003cb\u003eWeb Application Traffic\u003c/b\u003e from \u003cb\u003eLoad Balancer\u003c/b\u003e',
    synthetic_id:
      'cross-site-request-forgery@apache-webserver@load-balancer\u003eweb-application-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'load-balancer\u003eweb-application-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'cross-site-request-forgery',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eCross-Site Request Forgery (CSRF)\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e via \u003cb\u003eERP Internal Access\u003c/b\u003e from \u003cb\u003eBackoffice Client\u003c/b\u003e',
    synthetic_id:
      'cross-site-request-forgery@erp-system@backoffice-client\u003eerp-internal-access',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backoffice-client\u003eerp-internal-access',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'cross-site-request-forgery',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eCross-Site Request Forgery (CSRF)\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e via \u003cb\u003eERP System Traffic\u003c/b\u003e from \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id:
      'cross-site-request-forgery@erp-system@apache-webserver\u003eerp-system-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'apache-webserver\u003eerp-system-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'cross-site-request-forgery',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eCross-Site Request Forgery (CSRF)\u003c/b\u003e risk at \u003cb\u003eIdentity Provider\u003c/b\u003e via \u003cb\u003eAuth Credential Check Traffic\u003c/b\u003e from \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id:
      'cross-site-request-forgery@identity-provider@apache-webserver\u003eauth-credential-check-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'identity-provider',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'apache-webserver\u003eauth-credential-check-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['identity-provider']
  },
  {
    category: 'cross-site-request-forgery',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eCross-Site Request Forgery (CSRF)\u003c/b\u003e risk at \u003cb\u003eMarketing CMS\u003c/b\u003e via \u003cb\u003eCMS Content Traffic\u003c/b\u003e from \u003cb\u003eLoad Balancer\u003c/b\u003e',
    synthetic_id:
      'cross-site-request-forgery@marketing-cms@load-balancer\u003ecms-content-traffic',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: 'load-balancer\u003ecms-content-traffic',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'cross-site-request-forgery',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'very-likely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eCross-Site Request Forgery (CSRF)\u003c/b\u003e risk at \u003cb\u003eMarketing CMS\u003c/b\u003e via \u003cb\u003eMarketing CMS Editing\u003c/b\u003e from \u003cb\u003eBackoffice Client\u003c/b\u003e',
    synthetic_id:
      'cross-site-request-forgery@marketing-cms@backoffice-client\u003emarketing-cms-editing',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backoffice-client\u003emarketing-cms-editing',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'cross-site-request-forgery',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eCross-Site Request Forgery (CSRF)\u003c/b\u003e risk at \u003cb\u003eBackoffice ERP System\u003c/b\u003e via \u003cb\u003eERP Web Access\u003c/b\u003e from \u003cb\u003eBackend Admin Client\u003c/b\u003e',
    synthetic_id:
      'cross-site-request-forgery@erp-system@backend-admin-client\u003eerp-web-access',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link:
      'backend-admin-client\u003eerp-web-access',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'missing-network-segmentation',
    risk_status: 'unchecked',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eMissing Network Segmentation\u003c/b\u003e to further encapsulate and protect \u003cb\u003eApache Webserver\u003c/b\u003e against unrelated lower protected assets in the same network segment, which might be easier to compromise by attackers',
    synthetic_id: 'missing-network-segmentation@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'missing-network-segmentation',
    risk_status: 'unchecked',
    severity: 'low',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'low',
    title:
      '\u003cb\u003eMissing Network Segmentation\u003c/b\u003e to further encapsulate and protect \u003cb\u003eJenkins Buildserver\u003c/b\u003e against unrelated lower protected assets in the same network segment, which might be easier to compromise by attackers',
    synthetic_id: 'missing-network-segmentation@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['jenkins-buildserver']
  },
  {
    category: 'mixed-targets-on-shared-runtime',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eMixed Targets on Shared Runtime\u003c/b\u003e named \u003cb\u003eWebApp and Backoffice Virtualization\u003c/b\u003e might enable attackers moving from one less valuable target to a more valuable one',
    synthetic_id: 'mixed-targets-on-shared-runtime@webapp-virtualization',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: '',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: 'webapp-virtualization',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: [
      'apache-webserver',
      'marketing-cms',
      'erp-system',
      'contract-fileserver',
      'sql-database'
    ]
  },
  {
    category: 'missing-cloud-hardening',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'very-high',
    title:
      '\u003cb\u003eMissing Cloud Hardening (AWS)\u003c/b\u003e risk at \u003cb\u003eApplication Network\u003c/b\u003e: \u003cu\u003eCIS Benchmark for AWS\u003c/u\u003e',
    synthetic_id: 'missing-cloud-hardening@application-network',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: '',
    most_relevant_trust_boundary: 'application-network',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: [
      'load-balancer',
      'apache-webserver',
      'marketing-cms',
      'erp-system',
      'contract-fileserver',
      'sql-database',
      'identity-provider',
      'ldap-auth-server'
    ]
  },
  {
    category: 'missing-cloud-hardening',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'very-high',
    title:
      '\u003cb\u003eMissing Cloud Hardening (EC2)\u003c/b\u003e risk at \u003cb\u003eApache Webserver\u003c/b\u003e: \u003cu\u003eCIS Benchmark for Amazon Linux\u003c/u\u003e',
    synthetic_id: 'missing-cloud-hardening@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'missing-cloud-hardening',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'very-high',
    title:
      '\u003cb\u003eMissing Cloud Hardening\u003c/b\u003e risk at \u003cb\u003eERP DMZ\u003c/b\u003e',
    synthetic_id: 'missing-cloud-hardening@erp-dmz',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: '',
    most_relevant_trust_boundary: 'erp-dmz',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: [
      'erp-system',
      'contract-fileserver',
      'sql-database'
    ]
  },
  {
    category: 'missing-cloud-hardening',
    risk_status: 'unchecked',
    severity: 'elevated',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'very-high',
    title:
      '\u003cb\u003eMissing Cloud Hardening\u003c/b\u003e risk at \u003cb\u003eWeb DMZ\u003c/b\u003e',
    synthetic_id: 'missing-cloud-hardening@web-dmz',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: '',
    most_relevant_trust_boundary: 'web-dmz',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['apache-webserver', 'marketing-cms']
  },
  {
    category: 'missing-cloud-hardening',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eMissing Cloud Hardening (S3)\u003c/b\u003e risk at \u003cb\u003eContract Fileserver\u003c/b\u003e: \u003cu\u003eSecurity Best Practices for AWS S3\u003c/u\u003e',
    synthetic_id: 'missing-cloud-hardening@contract-fileserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'contract-fileserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['contract-fileserver']
  },
  {
    category: 'something-strange',
    risk_status: 'unchecked',
    severity: 'critical',
    exploitation_likelihood: 'likely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eExample Individual Risk\u003c/b\u003e at \u003cb\u003eDatabase\u003c/b\u003e',
    synthetic_id: 'something-strange@sql-database',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'sql-database',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'probable',
    data_breach_technical_assets: ['sql-database']
  },
  {
    category: 'something-strange',
    risk_status: 'unchecked',
    severity: 'medium',
    exploitation_likelihood: 'frequent',
    exploitation_impact: 'very-high',
    title:
      '\u003cb\u003eExample Individual Risk\u003c/b\u003e at \u003cb\u003eContract Filesystem\u003c/b\u003e',
    synthetic_id: 'something-strange@contract-fileserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'contract-fileserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: null
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eApache Webserver\u003c/b\u003e',
    synthetic_id: 'unencrypted-asset@apache-webserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'apache-webserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['apache-webserver']
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eBackoffice ERP System\u003c/b\u003e missing enduser-individual encryption with data-with-enduser-individual-key',
    synthetic_id: 'unencrypted-asset@erp-system',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'erp-system',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['erp-system']
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eGit Repository\u003c/b\u003e',
    synthetic_id: 'unencrypted-asset@git-repo',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'git-repo',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['git-repo']
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eIdentity Provider\u003c/b\u003e',
    synthetic_id: 'unencrypted-asset@identity-provider',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'identity-provider',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['identity-provider']
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eJenkins Buildserver\u003c/b\u003e',
    synthetic_id: 'unencrypted-asset@jenkins-buildserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'jenkins-buildserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['jenkins-buildserver']
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'high',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eMarketing CMS\u003c/b\u003e',
    synthetic_id: 'unencrypted-asset@marketing-cms',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'marketing-cms',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['marketing-cms']
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eContract Fileserver\u003c/b\u003e',
    synthetic_id: 'unencrypted-asset@contract-fileserver',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'contract-fileserver',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['contract-fileserver']
  },
  {
    category: 'unencrypted-asset',
    risk_status: 'mitigated',
    severity: 'medium',
    exploitation_likelihood: 'unlikely',
    exploitation_impact: 'medium',
    title:
      '\u003cb\u003eUnencrypted Technical Asset\u003c/b\u003e named \u003cb\u003eCustomer Contract Database\u003c/b\u003e missing enduser-individual encryption with data-with-enduser-individual-key',
    synthetic_id: 'unencrypted-asset@sql-database',
    most_relevant_data_asset: '',
    most_relevant_technical_asset: 'sql-database',
    most_relevant_trust_boundary: '',
    most_relevant_shared_runtime: '',
    most_relevant_communication_link: '',
    data_breach_probability: 'improbable',
    data_breach_technical_assets: ['sql-database']
  }
]

root.render(
  <React.StrictMode>
    <Dashboard risksJson={risksJson} />
  </React.StrictMode>
)
