#include <iostream>
using namespace std;
int producto(int, int);
 
 
int main() {
    cout << producto(5,8);
    return 0;
}
 
int producto (int primero, int segundo) {
    if (segundo > 1) {
        return primero + producto(primero, segundo - 1);
    }
    return primero;
}
