import React from 'react';
import { useHistory } from 'react-router';

interface FourZeroFourProps {}

const FourZeroFour: React.FC<FourZeroFourProps> = () =>{
  const history = useHistory();
  history.goBack();
  return <p>Pagina non trovata!, Torniamo indietro...</p>;
}

export default FourZeroFour