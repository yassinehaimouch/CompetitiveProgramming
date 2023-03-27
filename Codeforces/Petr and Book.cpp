#include <iostream>
#define WEEK_DAY 7
int        main(void)
{
    int    NumPages;
    int    arr[WEEK_DAY] = {0};
    int    i;
    std::cin >> NumPages;
    for (i=0; i < WEEK_DAY; i++)
    {
        std::cin >> arr[i];
    }
    i = -1;
    while (NumPages > 0)
    {
        i = (i + 1) % WEEK_DAY;
        NumPages -= arr[i];
    }
    std::cout << i + 1 << std::endl;
    return (0);
}