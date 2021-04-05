from iam_floyd import statement
import importlib
import os
import sys
import inspect

currentdir = os.path.dirname(os.path.abspath(
    inspect.getfile(inspect.currentframe())))
helperDir = '%s/../../helper/python' % currentdir
sys.path.insert(0, helperDir)

test = importlib.import_module('python_test')
out = getattr(test, 'out')
deploy = getattr(test, 'deploy')


def statements():
    # doc-start
    s1 = statement.Ec2() \
                .allow() \
                .to_start_instances()

    s2 = statement.Ec2() \
                .deny() \
                .to_stop_instances()
    # doc-end
    return [s1, s2]


all = statements()
out(all)
deploy(all)
