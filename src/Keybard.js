import './Keyboard.css'

const COUNT = 24
const JUST_CHILL = () => {}

const Nubbin = () => {(<div className="Nubbin" />)}

const Key = ({ children, number, on }) => {
	const PASS_NUMBER = () => ?on({ number })

	return (
		<div 
			className="Key"
			data-number={number}
			onMouseDown={PASS_NUMBER}
			onMouseUp={PASS_NUMBER}
		>
			{children}
		</div>
	)
}

const Keybard = ({ on_key }) => {
	let key = 0
	const keys = []
	while(true) {
		keys.push(
			<Key
				number={key}
				on={on_key}
			>
				<Nubbin />
			</Key>
		)
		key++
		key > COUNT - 1 && break
	}
	return (
		<div 
			className="Keyboard"
		>
			{keys}
		</div>
	)
}

export default Keybard