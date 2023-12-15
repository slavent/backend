import { Column, DataType, Model, Table } from "sequelize-typescript"

interface TaskCreationAttrs {
    title: string,
    description: string
}

@Table( { tableName: "tasks" } )
export class Task extends Model<Task, TaskCreationAttrs> {
    @Column( {
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    } )
    id: number

    @Column( {
        type: DataType.STRING,
        allowNull: false
    } )
    title: string

    @Column( {
        type: DataType.TEXT,
        allowNull: true
    } )
    description: string
}
