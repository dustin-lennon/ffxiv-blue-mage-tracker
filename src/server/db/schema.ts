import { integer, pgTableCreator, primaryKey, text, uniqueIndex, varchar, } from 'drizzle-orm/pg-core';

export const createTable = pgTableCreator((name) => `ffxiv_blue_mage_tracker_${name}`);

export const spells = createTable(
    'spells', {
        id: integer('id').primaryKey(),
        name: varchar('name').notNull(),
        description: text('description').notNull(),
        tooltip: text('tooltip').notNull(),
        order: integer('order').notNull(),
        rank: integer('rank').notNull(),
        patch: varchar('patch').notNull(),
        icon: varchar('icon').notNull(),
        type: varchar('type').notNull(),
        aspect: varchar('aspect').notNull(),
    },
    (spells) => {
        return {
            uniqueNameIdx: uniqueIndex('unique_name_idx').on(spells.name)
        };
    },
);

export const sources = createTable(
    'sources', {
        spellId: integer('spell_id').references(() => spells.id).notNull(),
        sourceType: text('source_type').notNull(),
        sourceText: text('source_text').notNull(),
    },
    (sources) => {
        return {
            pk: primaryKey({ columns: [sources.spellId, sources.sourceText] }),
        };
    }
);