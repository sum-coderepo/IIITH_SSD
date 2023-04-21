import sys

import math

import matplotlib.pyplot as plt
import numpy as np

start_x = 0.00
start_y = 0.00
current_x = 0.00
current_y = 0.00
path = []
new_name = ''
path.append((current_x, current_y))

angleMap = {'E': 0, 'NE': 45, 'N': 90, 'NW': 135, 'W': 180, 'SW': 225, 'S': 270, 'SE': 315}


def ploat_path():
    x_list = []
    y_list = []
    for route in path:
        x_list.append(float(route[0]))
        y_list.append(float(route[1]))

    plt.plot(x_list, y_list)
    plt.xlabel("X-axis")
    plt.ylabel("Y-axis")
    plt.title("Path trail")
    plt.show()

def final_direction():
    deltaX = float(current_x) - start_x
    deltaY = float(current_y) - start_y

    distance = math.dist([start_x, start_y], [float(current_x), float(current_y)])

    degrees_temp = math.atan2(deltaX, deltaY) / math.pi * 180

    if degrees_temp < 0:
        degrees_final = 360 + degrees_temp
    else:
        degrees_final = degrees_temp

    angle = calculate_angle()

    if angle < 0:
        angle = 360 + angle

    compass_brackets = ["E" , "E", "NE", "N", "N", "NW", "W", "W", "SW", "S", "S", "SE", "E"]

    compass_lookup = np.ceil(angle/30)
    ploat_path()

    return distance, angle, compass_brackets[int(compass_lookup)]

def calculate_angle():
    deltaX = float(current_x) - start_x
    deltaY = float(current_y) - start_y

    angle = math.atan2(deltaY, deltaX)
    return (math.degrees(angle))


def angle_radian(angle):
    return angle * math.pi / 180


def getNewCoordinates(angle, d):
    global current_y, current_x, path

    print("Current Co-ordinate", current_x, current_y)
    xx = float(current_x) + (float(d) * math.cos(angle))
    yy = float(current_y) + (float(d) * math.sin(angle))

    current_x = format(float(xx), ".2f")
    current_y = format(float(yy), ".2f")

    print("New Coordinates are: X:", current_x, ", Y:", current_y)

    path.append((format(float(current_x), ".2f"), format(float(current_y), ".2f")))

    print("Path so far: ", path)

    return


while new_name != 3:
    new_name = input('''Choose
                        1. Enter Path
                        2. show path & Interpret location from start location & Calculate Total Distance
                        3. quit
                        ''')

    new_name = int(new_name)
    if new_name == 1:
        fname = input('''Enter direction and distance Example - 4.5mm,NW  ''')
        distance = fname.split(',')[0][:-2]
        direction = (fname.split(',')[1]).upper().strip()
        # print("Distance is ", distance)
        angle_in_radian = angle_radian(angleMap[direction])
        getNewCoordinates(angle_in_radian, distance)

    if new_name == 2:
        distance, angle, direction = final_direction()
        print("Distance from Origin (0,0), angle and direction is :, ", format(float(distance), ".2f"), format(float(angle), ".2f"), direction)

    if new_name == 3:
        sys.exit()
