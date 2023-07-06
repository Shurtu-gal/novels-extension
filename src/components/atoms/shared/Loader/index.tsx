import styles from './styles.module.css';

const Loader = () => {
	return (
		<div className={styles.loader_container}>
			<div className={styles.scene}>
				<div className={styles.shadow}></div>
				<div className={styles.jumper}>
					<div className={styles.spinner}>
						<div className={styles.scaler}>
							<div className={styles.loader}>
								<div className={styles.cuboid}>
									<div className={styles.cuboid__side}></div>
									<div className={styles.cuboid__side}></div>
									<div className={styles.cuboid__side}></div>
									<div className={styles.cuboid__side}></div>
									<div className={styles.cuboid__side}></div>
									<div className={styles.cuboid__side}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loader;
