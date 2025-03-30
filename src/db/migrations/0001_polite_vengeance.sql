ALTER TABLE "budget_goals" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "budget_goals" CASCADE;--> statement-breakpoint
ALTER TABLE "expenses" ALTER COLUMN "category_id" SET DATA TYPE text;