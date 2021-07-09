import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { CampaignForm } from './components';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <CampaignForm />
      </header>
    </div>
  );
};

export default withAuthenticator(App, true);
