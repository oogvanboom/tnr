import './Keyboard.css'

const COUNT = 24
const JUST_CHILL = () => {}

const Nubbin = () => {(<div className="Nubbin" />)}

const Key = ({ children, number, on }) => {
	const PASS_NUMBER = () => on && on({ number })

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
		const reached_key_count = key > COUNT - 1
		if(reached_key_count) { break }
		keys.push(
			<Key
				number={key}
				on={on_key}
			>
				<Nubbin />
			</Key>
		)
		key++
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