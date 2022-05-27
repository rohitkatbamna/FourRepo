import react from "react";
import { StyleSheet, View } from "react-native";
import { DataTable } from "react-native-paper";
import test from "../assets/test.json";
import Courses from "./courses";

function Term({ levels }) {
	console.log(levels);
	return (
		<View>
			{levels.map((obj) => {
				return (
					<>
						<DataTable style={styles.container}>
							<DataTable.Header style={styles.tableHeader}>
								<DataTable.Title style={styles.stylingterm}>
									Term
								</DataTable.Title>
								<DataTable.Title>CPA</DataTable.Title>
								<DataTable.Title>CGPA</DataTable.Title>
							</DataTable.Header>
							<DataTable.Row>
								<DataTable.Cell style={styles.stylingterm}>
									{obj.level_name}
								</DataTable.Cell>
								<DataTable.Cell>{Math.round(obj.cgpa)}</DataTable.Cell>
								<DataTable.Cell>{Math.round(obj.tgpa)}</DataTable.Cell>
							</DataTable.Row>
						</DataTable>
						<Courses courses={obj.courses} />
					</>
				);
			})}
		</View>
	);
}
export default Term;

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	tableHeader: {
		backgroundColor: "lightblue",
	},
	stylingterm: {
		flex: 3,
	},
});
