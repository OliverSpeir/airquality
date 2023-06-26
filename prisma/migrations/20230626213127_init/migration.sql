-- CreateTable
CREATE TABLE "SensorData" (
    "id" SERIAL NOT NULL,
    "indoor_humidity" DOUBLE PRECISION NOT NULL,
    "indoor_temperature" DOUBLE PRECISION NOT NULL,
    "indoor_pressure" DOUBLE PRECISION NOT NULL,
    "indoor_pm10_0" DOUBLE PRECISION NOT NULL,
    "indoor_pm25" DOUBLE PRECISION NOT NULL,
    "indoor_pm1" DOUBLE PRECISION NOT NULL,
    "indoor_um_count_0_3" DOUBLE PRECISION NOT NULL,
    "indoor_um_count_0_5" DOUBLE PRECISION NOT NULL,
    "indoor_um_count_1_0" DOUBLE PRECISION NOT NULL,
    "indoor_um_count_2_5" DOUBLE PRECISION NOT NULL,
    "indoor_um_count_5_0" DOUBLE PRECISION NOT NULL,
    "indoor_um_count_10_0" DOUBLE PRECISION NOT NULL,
    "indoor_time_stamp" INTEGER NOT NULL,
    "outdoor_humidity" DOUBLE PRECISION NOT NULL,
    "outdoor_temperature" DOUBLE PRECISION NOT NULL,
    "outdoor_pressure" DOUBLE PRECISION NOT NULL,
    "outdoor_pm10_0" DOUBLE PRECISION NOT NULL,
    "outdoor_pm25" DOUBLE PRECISION NOT NULL,
    "outdoor_pm1" DOUBLE PRECISION NOT NULL,
    "outdoor_um_count_0_3" DOUBLE PRECISION NOT NULL,
    "outdoor_um_count_0_5" DOUBLE PRECISION NOT NULL,
    "outdoor_um_count_1_0" DOUBLE PRECISION NOT NULL,
    "outdoor_um_count_2_5" DOUBLE PRECISION NOT NULL,
    "outdoor_um_count_5_0" DOUBLE PRECISION NOT NULL,
    "outdoor_um_count_10_0" DOUBLE PRECISION NOT NULL,
    "outdoor_time_stamp" INTEGER NOT NULL,

    CONSTRAINT "SensorData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SensorData_indoor_time_stamp_key" ON "SensorData"("indoor_time_stamp");

-- CreateIndex
CREATE UNIQUE INDEX "SensorData_outdoor_time_stamp_key" ON "SensorData"("outdoor_time_stamp");
