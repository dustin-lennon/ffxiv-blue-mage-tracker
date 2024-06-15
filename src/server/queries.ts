/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "server-only";
import { db } from "./db";
import { eq, sql, asc } from "drizzle-orm";
import { spells, sources } from "./db/schema";

export async function getAvailableSpells(page = 1) {
  const offset = (page - 1) * 16;

  const sqSources = db
    .select({
      spellId: sources.spellId,
      sourceText: sql<string>`string_agg(${sources.sourceText}, ', ')`.as(
        "source_text",
      ),
    })
    .from(sources)
    .groupBy(sources.spellId)
    .as("sources");

  const spellList = await db
    .select({
      spellId: spells.order,
      name: spells.name,
      description: spells.description,
      tooltip: spells.tooltip,
      patch: spells.patch,
      icon: spells.icon,
      type: spells.type,
      aspect: spells.aspect,
      rank: spells.rank,
      whereToAquire: sqSources.sourceText,
    })
    .from(spells)
    .innerJoin(sqSources, eq(spells.id, sqSources.spellId))
    .orderBy(asc(spells.order))
    .limit(16)
    .offset(offset);

  return spellList;
}
