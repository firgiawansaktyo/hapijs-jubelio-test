import Sequelize from "sequelize"

import conn from "../../config/Database"


export const Product = conn.define('vnd_product', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: true },
    created_date: { type: 'TIMESTAMP' , allowNull: true },
    updated_date: { type: 'TIMESTAMP', allowNull: true },
    prdNo: { type: Sequelize.STRING(255), allowNull: false },
    prdnm: { type: Sequelize.STRING(255), allowNull: false },
    SKU: { type: Sequelize.STRING(255), allowNull: false },
    prdImg01: { type: Sequelize.STRING(50), allowNull: false },
    htmlDetail: { type: Sequelize.STRING(5), allowNull: false },
    Selprc: { type: Sequelize.INTEGER(), allowNull: false },
    is_active: { type: Sequelize.STRING(1), defaultValue: 'Y' }
        
}, { timestamps: false, freezeTableName: true })