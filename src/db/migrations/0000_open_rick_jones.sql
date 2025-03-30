CREATE TABLE "budget_goals" (
	"id" text PRIMARY KEY NOT NULL,
	"category_id" integer,
	"amount" numeric(10, 2) NOT NULL,
	"period" text NOT NULL,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"icon" text,
	"color" text,
	"keywords" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "categories_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "expenses" (
	"id" text PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"category_id" integer,
	"date" timestamp DEFAULT now() NOT NULL,
	"payment_method" text,
	"location" text,
	"notes" text,
	"auto_categorized" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "budget_goals" ADD CONSTRAINT "budget_goals_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;