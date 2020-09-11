import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";
import { query } from "express";

export class AlterProviderFieldToProviderId1599683957619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('Appointments', 'provider');
        await queryRunner.addColumn('Appointments', new TableColumn({
            name: 'provider_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('Appointments', new TableForeignKey({
            columnNames: ['provider_id'],
            name: 'AppointmentsProvider',
            referencedColumnNames: ['id'],
            referencedTableName: 'Users',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('Appointments', 'AppointmentsProvider');
        await queryRunner.dropColumn('Appointments', 'provider_id');
        await queryRunner.addColumn('Appointments', new TableColumn({
            name: 'provider',
            type: 'uuid'
        }));
    }

}
