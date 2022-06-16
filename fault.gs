class Fault
{
	//Faults defined for Bit-wise OR storage
	
	public define int FLT_NONE = 0;
	//Tracton Motor Faults
	public define int FLT_TM_FIRE = 1;
	public define int FLT_TM_OVERHEAT = 2;
	public define int FLT_TM_FLASHOVER = 4;
	public define int FLT_TM_AMPERAGE = 8;
	public define int FLT_TM_POWERFLUX = 16;
	public define int FLT_TM_SIEZE = 32;
	//Axle/wheel Faults
	public define int FLT_AXLE_HOTBOX = 64;
	public define int FLT_AXLE_BEARING = 128;
	public define int FLT_AXLE_OVERWEAR = 256;
	//Prime mover Faults
	public define int FLT_PM_OVERHEAT = 512;
	public define int FLT_PM_GENERAL = 1024;
	public define int FLT_PM_COLD = 2048;
	public define int FLT_PM_GURUWATER = 4096;
	public define int FLT_PM_FLASHOVER = 8192;
	public define int FLT_PM_TECHNICAL = 16384;
	public define int FLT_PM_FIRE = 32768;
	public define int FLT_PM_SHUTTERS = 65536;
	public define int FLT_PM_DRIVESHAFT = 131072;
	public define int FLT_PM_TURBO = 262144;
	public define int FLT_PM_FUELOUT = 524288;
	public define int FLT_PM_FUELSYS = 1048576;
	//Car Faults
	public define int FLT_CAR_DRAGGING = 2097152;
	public define int FLT_CAR_KICKER = 4194304;
	public define int FLT_CAR_BRAKELAG = 8388608;
	public define int FLT_CAR_HOTWHEEL = 16777216;
	public define int FLT_CAR_RETAINER = 33554432;
	public define int FLT_CAR_BROKENHOSE = 67108864;
	public define int FLT_CAR_LEAKINGHOSE = 134217728;
	public define int FLT_CAR_RIGDRAGGING = 268435456;
	//536870912
	//1073741824
	
	//Trainz Type limits prevent further additions for Bit-wise OR values
	
	
	
	//Severity Ratings
	public define int SVR_NONE = 0;
	public define int SVR_MILD = 1;
	public define int SVR_MAJOR = 2;
	public define int SVR_SEVERE = 3;
	
	
}