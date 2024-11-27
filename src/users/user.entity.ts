import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn() // Auto-increment ID.
    id: number;

    @Column({ type: 'varchar', length: 100 }) // Column name, data type, length.
    name: string;

    @Column({ type: 'varchar', length: 100, unique: true, nullable: true }) // Unique email.
    email: string;

    @Column({ type: 'varchar', length: 255, nullable: true }) // Password.
    password: string;

    @CreateDateColumn({ type: 'timestamp' }) // Create date.
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' }) // Update date.
    updatedAt: Date;
}
