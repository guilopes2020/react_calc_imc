import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/powered.png'

import { levels, calculateImc } from './helpers/imc'
import { GridItem } from './components/gridItem'

const App = () => {

	const [heightField, setHeightField] = useState<number>(0)
	const [weightField, setWeightField] = useState<number>(0)

	const handleCalculateButton = () => {
		if (heightField && weightField) {
			
		} else {
			alert('digite os campos corretamente')
		}

	}

	return (
  		<div className={styles.main}>
  			<header>
				<div className={styles.headerContainer}>
					<img src={poweredImage} alt="" width={200} />
				</div>
			</header>
			<div className={styles.container}>
				<div className={styles.leftSide}>
					<h1>Calcule seu IMC</h1>
					<p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela OMS para calcular o peso ideal de cada pessoa.</p>
					<input type="number" placeholder='Digite a sua altura. Ex: 1.5 (em metros)' value={heightField > 0 ? heightField : ''} onChange={e => setHeightField(parseFloat(e.target.value))} />
					<input type="number" placeholder='Digite seu peso Ex: 75.3 (em Kg)' value={weightField > 0 ? weightField : ''} onChange={e => setWeightField(parseFloat(e.target.value))} />
					<button onClick={handleCalculateButton}>Calcular</button>
				</div>
				<div className={styles.rightSide}>
					<div className={styles.grid}>
						{levels.map((item, key) => (
							<GridItem key={key} item={item} />	
						))}
					</div>
				</div>
			</div>
  		</div>
  	)
}

export default App;