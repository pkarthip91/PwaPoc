import React, { useEffect, useState } from 'react';

const InstallPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (showPrompt) {
      const promptEvent = new Promise((resolve) => {
        const handleUserChoice = (choiceResult) => {
          setShowPrompt(false);
          resolve(choiceResult);
        };

        window.addEventListener('appinstalled', handleUserChoice);
      });

      setShowPrompt(false);

      const event = await promptEvent;
      
      if (event && event.outcome === 'accepted') {
        console.log('User accepted the installation prompt');
      } else {
        console.log('User dismissed the installation prompt');
      }
    }
  };

  return (
    showPrompt && (
      <div className="install-prompt">
        <p>Install this app for a better experience.</p>
        <button onClick={handleInstall}>Install</button>
      </div>
    )
  );
};

export default InstallPrompt;
