-- CreateTable
CREATE TABLE "TeacherTable" (
    "tId" TEXT NOT NULL PRIMARY KEY,
    "tFullName" TEXT NOT NULL,
    "tSubject" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StudentTable" (
    "sId" TEXT NOT NULL PRIMARY KEY,
    "sFullName" TEXT NOT NULL,
    "sEmail" TEXT NOT NULL,
    "sGender" TEXT NOT NULL,
    "sPhoneNumber" TEXT NOT NULL,
    "teacherTableTId" TEXT NOT NULL,
    CONSTRAINT "StudentTable_teacherTableTId_fkey" FOREIGN KEY ("teacherTableTId") REFERENCES "TeacherTable" ("tId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentTable_sEmail_key" ON "StudentTable"("sEmail");

-- CreateIndex
CREATE UNIQUE INDEX "StudentTable_sPhoneNumber_key" ON "StudentTable"("sPhoneNumber");
