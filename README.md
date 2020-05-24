<p align="center">
  <img src="https://raw.githubusercontent.com/jardelgoncalves/broleto/master/logo.png" width="200">
</p>

<h3 align="center">
  Valide e/ou obtenha dados de boletos bancário ou arrecadação de forma fácil 💵
</h3>
Uma biblioteca que suporta validação e obtenção de boletos bancários ou arrecadação seja pela linha digitável ou código de barras com ou sem formatação.

## Instalação
`npm install broleto --save`
<br />ou<br />
`yarn add broleto`

## Uso
```js
import { Boleto } from "broleto"

const boleto = new Boleto('34191091070000013555851122200002157810000115300');
```

### Verificando se o boleto é válido
```js
boleto.valid();
// output

true
```

### Obtendo o banco emissor
Caso o boleto seja de arrecadação ou o banco não esteja mapeado na biblioteca será retornado uma string `Unknown`
```js
boleto.banks();
// output

'Itaú Unibanco S.A'
```

### Obtendo o tipo de código/numeração do boleto
Essa função irá retornar se o boleto é `LINHA DIGITAVEL`, `CODIGO DE BARRAS` ou `INVALIDO`.
```js
boleto.codeType();
// output
'LINHA DIGITAVEL'
```

### Obtendo o tipo boleto
Essa função irá retornar se o boleto é `ARRECADACAO` ou `BANCO`.<br />
Em caso de `ARRECADACAO` é retornado um subtipo que podem ser os seguintes valores:
`ARRECADACAO_PREFEITURA`, `CONVENIO_SANEAMENTO`, `CONVENIO_ENERGIA_ELETRICA_E_GAS`,
`CONVENIO_TELECOMUNICACOES`, `ARRECADACAO_ORGAOS_GOVERNAMENTAIS`, `OUTROS`,
`ARRECADACAO_TAXAS_DE_TRANSITO` ou `''` (string vazia)
```js
boleto.type();
// output
{
  type: 'BANCO',
  subtype: '',
}
```

### Obtendo a data de vencimento
```js
boleto.expirationDate();
// output
2013-08-05T00:00:00.000Z
```

### Verificando se boleto está vencido
```js
boleto.expired();
// output
true
```

### Obtendo a quantidade de dias que o boleto está vencido
Caso o boleto não esteja é retornado o valor `0`
```js
boleto.expiredDays();
// output
2434
```

### Obtendo o valor do boleto
```js
boleto.amount();
// output
1153
```

### Calculando juros
Disponibilizamos também a possibilidade de calcular juros do boleto. O método pode receber até 4 parâmetros.<br />
Exemplo:<br />
`boleto.interest(interestValue, expiredDays = false, percent = true, month = true)`<br />
- `interestValue` - é um valor numérico que corresponde a porcentagem ou valor cobrado como juros.
- `expiredDays` - pode receber ou um valor **numerico** que se refere a quantidade de dias vencidos do boleto ou um valor **booleano** (false) caso queira que a quantidade de dias vencidos usado no cálculo do juros seja obtido de forma automática, por padrão esse valor é `false`.
- `percent` - é um valor booleano que por padrão é `true` refere-se ao tipo do valor informado. Em caso de true isso quer dizer que o valor informado para `interestValue` no calculo é em porcentagem. Caso informe false o `interestValue` passa a ser compreendido como valor em reais.
- `month` - Informa como o juros é calculado, se é ao mês ou ao dia. Por padrão o valor é `true`, ou seja, no calculo o juros cobrado será ao mês. Caso queria informar que o juros é calculado ao dia, informe `false` para este parâmetro.

```js
boleto.interest(1, false, true, true);
// ou somente
boleto.interest(1);
// output
935.46
```

### Calculando multas
Disponibilizamos também a possibilidade de calcular multa do boleto. O método pode receber até 2 parâmetros.<br />
Exemplo:<br />
`boleto.fines(finesValue, percent = true)`<br />
- `finesValue` - é um valor numérico que corresponde a porcentagem ou valor cobrado como multa.
- `percent` - é um valor booleano que por padrão é `true` refere-se ao tipo do valor informado. Em caso de `true` isso quer dizer que o valor informado para `finesValue` no calculo é em porcentagem. Caso informe `false` o `finesValue` passa a ser compreendido como valor em reais.
```js
boleto.fines(17, false);
// output (nesse caso o boleto possui 17 reais de multa)
17

// ou
boleto.fines(1);
// output (1% de multa)
11.53
```

### Obtendo todas as informações
Existe um método que agrupa as demais informações sobre um boleto.<br />
```js
boleto.toJSON();
// output
{ 
  barcode: '34191578100001153001091000000135555112220000',
  codeType: 'LINHA DIGITAVEL',
  type: 'BANCO',
  expirationDate: 2013-08-05T00:00:00.000Z,
  expired: true,
  expiredDays: 2434,
  banks: 'Itaú Unibanco S.A',
  amount: 1153,
  prettyAmount: 'R$ 1.153,00',
  valid: true
}
```
## Como contribuir
- Faça um Fork desse repositório,
- Faça um clone do respositório criado a partir do fork: `git clone https://github.com/<seu username>/broleto.git`
- Crie uma branch com a sua feature: `git checkout -b feat/minha-feature-de-examplo`
- Commit suas mudanças: `git commit -m "feat: Minha nova feature"` (**Ver regras para commits**)
- Faça o push da sua branch: `git push origin feat/minha-feature-de-examplo`
- Ir em pull requests do projeto original e crie uma pull request com o seu commit.

### Regras para commits
- Para cada commit siga a padronização do [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- evite commits acima de 70 caracteres


## Contribuidores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/jardelgoncalves">
        <img src="https://avatars0.githubusercontent.com/u/22735511?v=4" width="120px;" alt=""/>
        <br />
        <sub>
          <b>Jardel Gonçalves</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/diegogasparcruz">
        <img src="https://avatars0.githubusercontent.com/u/29083828?v=4" width="120px;" alt=""/>
        <br />
        <sub>
          <b>Diego Gaspar</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## License

MIT © <a href="https://github.com/jardelgoncalves">Jardel Gonçalves</a>
