// view no lugar de DIV, header, aside, footer, section...
// text é usada para todo tipo de texto
// não existe class, id, sendo assim, usa-se ele no style com o styleSheet
// no ReactNative o display é sempre flex por padrão
// não tem hifen para separar as palavras no css (ex: background-color), em vez disso usa-se caixa alta na segunda palavra
// valores que não são numero precisam de aspas
// herança de estilo: não pode passar uma estilização no componente acima
// estilização própria por elemento

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}