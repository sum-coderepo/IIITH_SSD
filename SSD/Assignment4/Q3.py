import math


destination_x = 7
origin_x = 2
destination_y = 7
origin_y = 3

deltaX = destination_x - origin_x

deltaY = destination_y - origin_y

degrees_temp = math.atan2(deltaX, deltaY)/math.pi*180
print(degrees_temp)

if degrees_temp < 0:

    degrees_final = 360 + degrees_temp

else:

    degrees_final = degrees_temp

compass_brackets = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"]

compass_lookup = round(degrees_final / 45)



print(compass_lookup, compass_brackets[compass_lookup])